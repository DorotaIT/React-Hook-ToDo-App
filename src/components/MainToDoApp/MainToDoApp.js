import React, { useState } from 'react';
import { AddingItem } from '../AddingItem/AddingItem';
import { ItemList } from '../ItemList/ItemList';
import { ToDoList } from '../ToDoList/ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './MainToDoApp.css';

const mockDate = [
 {id: uuidv4(), title: "Nauka Reacta", isDone: true, tags: ["Programming"]},
 {id: uuidv4(), title: "Zrobić fajny projekt z hookami", isDone: false, tags: ["Programming"]},
 {id: uuidv4(), title: "Mycie naczyń", isDone: false, tags: []}
]

export const MainToDoApp = () => {
    const [toDos, setToDos] = useState(mockDate);

    const callbackAddToDos = (title) => {
        const newToDos = {
            id: uuidv4(),
            title,
            isDone: false,
            tags: []
        }

        setToDos([newToDos, ...toDos]);
    }

    return (
        <div className="container">
            <h2>Lista ToDo</h2>
            <AddingItem
                callbackAddToDos={callbackAddToDos}
            />
            <ToDoList
                toDos={toDos}
            />
        </div>
    )

};