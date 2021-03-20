import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnInc = document.querySelector('#inc');
const btnDec = document.querySelector('#dec');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INC = 'INC';
const DEC = 'DEC';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INC, difference });
const decrease = () => ({ type: DEC });

const initialState = {
    toggle: false,
    counter: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle,
            };
        case INC:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DEC:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
};

render();

store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnInc.onclick = () => {
    store.dispatch(increase(1));
};
btnDec.onclick = () => {
    store.dispatch(decrease());
};
