import React from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nick: '',
    });
    const { name, nick } = state;
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
