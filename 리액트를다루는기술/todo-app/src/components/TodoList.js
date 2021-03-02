import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = (props) => {
    return (
        <div className="TodoList">
            <TodoListItem></TodoListItem>
            <TodoListItem></TodoListItem>
        </div>
    );
};

export default TodoList;
