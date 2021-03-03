import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 2500; i++) {
        arr.push({
            id: i,
            text: `todo ${i}`,
            checked: false,
        });
    }
    return arr;
}

const App = () => {
    const [todos, setTodos] = useState(createBulkTodos);
    const nextId = useRef(todos[todos.length - 1].id + 1);
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos((todos) => todos.concat(todo));
        nextId.current += 1;
    }, []);
    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}></TodoInsert>
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle}
            ></TodoList>
        </TodoTemplate>
    );
};

export default App;
