import React, { useState } from 'react';

const Info = (props) => {
    const [name, setname] = useState('');
    const [nick, setNick] = useState('');
    const onChangeName = (e) => {
        setname(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nick} onChange={onChangeNick}></input>
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
