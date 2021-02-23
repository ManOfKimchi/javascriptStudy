import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('calc');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        setList(list.concat(parseInt(number)));
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    const customRef = useRef(1);
    const setCustomRef = (val) => {
        customRef.current = val;
    };

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}></input>
            <button onClick={onInsert}>Register</button>
            <ul>
                {list.map((val, idx) => (
                    <li key={idx}>{val}</li>
                ))}
            </ul>
            <div>
                <b>Average:</b> {avg}
            </div>
            <div>CustomRef: {setCustomRef}</div>
        </div>
    );
};

export default Average;
