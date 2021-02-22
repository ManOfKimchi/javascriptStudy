import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nick: '',
    });
    const { name, nick } = state;
    const onChange = (e) => {
        dispatch(e.target);
    };
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nick" value={nick} onChange={onChange}></input>
            </div>
            <div>
                <b>name: </b>
                {name}
            </div>
            <div>
                <b>nick: </b>
                {nick}
            </div>
        </div>
    );
};

export default Info;
