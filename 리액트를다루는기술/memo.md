# 메모장

## React 기본 내장 함수

-   useCallback
-   useMemo

## Redux

-   상태 관리용 라이브러리
-   contextAPI 없을 때 주로 사용
-   store
    -   전역으로 유일하게 사용
    -   reducer
        -   변화를 일으키는 함수
        -   fn(state, action)
        -   순수함수로 작성해야 함
            -   이전상태와 액션을 파라미터로
            -   파라미터 외의 값에 의존 금지
            -   이전상태 변경 금지
            -   일관된 인풋 아웃풋
                -   함수 내 Date, Random, async 금지
                -   사용 시 미들웨어 활용
    -   dispatch
        -   action을 발생시키는 것
        -   실행 시 스토어가 리듀서 실행시켜 상태 업데이트함
    -   기타 내장함수
        -   un/subscribe
        -   connect
        -   bindActionCreators
        -   useSelector
            -   connect 대체
            ```js
            const result = useSelector(mapStateToProps);
            ```
        -   useDispatch
            -   컴포넌트에서 스토어 dispatch 함수 사용 가능하게 해줌
            ```js
            const dispatch = useDispatch();
            dispatch({ type: 'AAA' });
            ```
            -   useCallback 과 사용하여 재생성 방지
            ```js
            const number = useSelector((state) => state.number);
            const dispatch = useDispatch();
            const onIncrease = useCallback(
                () => dispatch({ type: 'INCREASE' }),
                [dispatch]
            );
            ```
        -   useStore
            -   컴포넌트에서 스토어 객체 직접 사용
            -   사용빈도 적음, 많이 의존하면 코드 구조 의심해봐야할듯?
        -   useActions[(비공식 직접 구현해서 사용)](https://react-redux.js.org/api/hooks#recipe-useactions)
            -   액션 생성함수를 디스패치 하는 함수로 변환해줌
            -   actions: 액션 생성함수로 이루어진 배열
            -   deps: 이 배열 안에 들어 있는 원소가 바뀌면 디스패치 함수 새로 만듬
            ```js
            export function useActions(actions, deps) {
                const dispatch = useDispatch();
                return useMemo(
                    () => {
                        if (Array.isArray(actions)) {
                            return actions.map((a) =>
                                bindActionCreators(a, dispatch)
                            );
                        }
                        return bindActionCreators(actions, dispatch);
                    },
                    deps ? [dispatch, ...deps] : [dispatch]
                );
            }
            ```
-   redux-actions
    -   createActions
        -   action 생성 함수를 간결하게 관리
        ```js
        const AAA = 'aaa/AAA';
        export const aaa = createAction(AAA);
        ```
    -   handleActions
        -   reducer 함수 간단하게 사용
        ```js
        const initialState = {
            /* ... */
        };
        const aaa = handleActions({
            [AAA]: (state, action) => ({
                /* ... */
            }),
            [BBB]: (state, action) => ({
                /* ... */
            }),
            initialState,
        });
        export default aaa;
        ```

### Redux pattern example

-   서순은 별로 상관없음..

1. action type 정의

    - namespace 선언
    - 액션생성함수 추가
        - object 형태로 리턴
        - type 키가 필수값
        - 다른 키 값 추가 가능

2. reducer 함수 작성

    - fn(state = init, action) 형태
    - 리턴을 변경된 state 객체 형태로

3. rootReducer 만들기

    - 리듀서 묶어서 관리
    - combineReducer 유틸함수 사용

4. 전역 스토어 생성

    - createStore(rootReducer)
    - App 컴포넌트에 Provider 컴포넌트로 감싸야 함

        ```js
        const store = createStore(rootReducer);
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        ```

5. 컴포넌트와 스토어 연결

    - connect(mapStateToProps, mapDispatchToProps)(MyComponent)

        - mapStateToProps
            - 리덕스 스토어의 상태를 컴포넌트로 넘김
        - mapDispatchToProps
            - 액션 생성함수를 컴포넌트로 넘김

        ```js
        const mapStateToProps = (state) => ({
            /*...*/
        });
        const mapDiapatchProps = (dispatch) => ({
            key: () => {
                dispatch(/*...*/);
            },
        });

        export default connect(mapStateToProps, mapDiapatchProps)(MyComponent);
        ```

        - 더 간단하게 표현하는 방법 두가지

            - bindActionCreator

            ```js
            export default connect(
                /*..*/,
                dispatch => bindActionCreators(
                    {
                        action1,
                        action2,
                    },
                    dispatch,
                ),
            )(MyComponent)
            ```

            - 더 심플하게
                - 내부에서 bindActionCreator 작업을 대신함

            ```js
            export default connect(
                /*..*/,
                {
                    action1,
                    action2,
                },
            )(MyComponent)
            ```
