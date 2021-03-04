import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
        (e) => {
            if (value) onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="add your todo..."
                value={value}
                onChange={onChange}
            ></input>
            <button type="submit">
                <MdAdd></MdAdd>
            </button>
        </form>
    );
};

export default TodoInsert;
