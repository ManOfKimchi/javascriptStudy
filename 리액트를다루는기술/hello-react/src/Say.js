import React, { useState } from 'react';

const Say = () => {
    // member, setter 정도로 이해하면 될듯?
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('hi');
    const onClickLeave = () => setMessage('bye');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                Red
            </button>
            <button
                style={{ color: 'green' }}
                onClick={() => setColor('green')}
            >
                Green
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                Blue
            </button>
        </div>
    );
};

export default Say;
