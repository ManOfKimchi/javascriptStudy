import React, { useState } from 'react';

const Counter = (props) => {
    const [value, setValue] = useState(0);
    const setNum = (num) => {
        setValue(value + num);
    };
    return (
        <div>
            <p>
                current counter value is <b>{value}</b>
            </p>
            <button onClick={() => setNum(-1)}>-1</button>
            <button onClick={() => setNum(+1)}>+1</button>
        </div>
    );
};

export default Counter;
