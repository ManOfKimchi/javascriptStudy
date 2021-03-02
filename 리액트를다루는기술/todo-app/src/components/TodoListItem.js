import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = (props) => {
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                <div className="text">Todo</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};

export default TodoListItem;
