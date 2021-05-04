import { createAction, handleActions } from 'redux-actions';
import {
    delay,
    put,
    takeEvery,
    takeLatest,
    select,
    throttle,
} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 두번째 파라미터는 마우스클릭 이벤트 방지용
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
    const number = yield select((state) => state.counter);
    console.log(`current number is ${number}.`);
}
function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
    const number = yield select((state) => state.counter);
    console.log(`current number is ${number}.`);
}

export function* counterSaga() {
    yield throttle(3000, INCREASE_ASYNC, increaseSaga);
    // 들어오는 모든 액션에 대해 특정 작업 처리
    // yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // 진행중인 작업 취소하고 가장 마지막 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: (state) => state + 1,
        [DECREASE]: (state) => state - 1,
    },
    initialState
);

export default counter;
