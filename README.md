# javascriptStudy

- https://manofkimchi.github.io/javascriptStudy/
- javascript 학습내용 정리
- javascript 로 개발한 토이프로젝트 보관
- [react-redux 이해하기](https://medium.com/@ca3rot/%EC%95%84%EB%A7%88-%EC%9D%B4%EA%B2%8C-%EC%A0%9C%EC%9D%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%AC%EC%9A%B8%EA%B1%B8%EC%9A%94-react-redux-%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-1585e911a0a6)
- useState
  ```javascript
  const [aaa, setAaa] = useState("");
  ```
- useEffect
  컴포넌트가 렌더링 될 때마다 특정 작업을 실행하게 해주는 hook
  함수형 컴포넌트에서 생명주기 매서드 사용가능하게 해줌
  [사용예](https://xiubindev.tistory.com/100)
- useMemo
  memoized value를 반환
  ```javascript
  const aaa = useMemo(() => fnAaa(bbb), [bbb]);
  ```
  변경되지 않은 값의 비용 줄이기 위해 사용
- useCallback
  하위 컴포넌트가 React.memo로 최적화 되어있고 콜백함수를 props로 넘길 때 의미 있음
  ```javascript
  useCallback(fn, deps) == useMemo(() => fn, deps);
  ```
- [useMemo와 useCallback을 사용해야 하는 시점](https://atercatus.github.io/react/2020-01-07-useMemo-useCallback)
- useSelector
  connect 함수 없이 리덕스 상태 조회
- useDispatch
  스토어의 내장함수 dispatch 사용
  useCallback과 같이 사용하는 것을 권장
- useStore
  리덕스 스토어 직접 사용
  사용 지양해야 함
- useActions
  직접 구현 필요
