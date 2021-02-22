import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
    console.log('calc');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    };
    const onInsert = useCallback(
        (e) => {
            setList(list.concat(parseInt(number)));
            setNumber('');
        },
        [number, list]
    );
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}></input>
            <button onClick={onInsert}>Register</button>
            <ul>
                {list.map((val, idx) => (
                    <li key={idx}>{val}</li>
                ))}
            </ul>
            <div>
                <b>Average:</b> {avg}
            </div>
        </div>
    );
};

export default Average;
