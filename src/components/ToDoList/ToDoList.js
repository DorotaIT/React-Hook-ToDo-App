import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';
import { ItemList } from '../ItemList/ItemList';


export const ToDoList = (props) => {
    const {toDos, callbackToggleIsDone} = props;
    console.log("todos", toDos)
    return (
        <ul className="todo-list list-group">
            {toDos.map( (item) => (
                <ItemList
                key={item.id}
                item={item}
                callbackToggleIsDone={callbackToggleIsDone}
                />
            ))}
        </ul>
    )

};