import React, { useState } from 'react';

const IterateSample = () => {
    const [names, setNames] = useState([
        {
            id: 1,
            text: 'snowman',
        },
        {
            id: 2,
            text: 'ice',
        },
        {
            id: 3,
            text: 'snow',
        },
        {
            id: 4,
            text: 'wind',
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        setNextId(nextId + 1);
        setNames(
            names.concat([
                {
                    id: nextId,
                    text: inputText,
                },
            ])
        );
        setInputText('');
    };
    const onRemove = (id) => {
        setNames(names.filter((name) => name.id !== id));
    };
    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterateSample;
