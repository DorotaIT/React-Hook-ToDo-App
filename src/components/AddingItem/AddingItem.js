import React, {useState} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './AddingItem.css';

export const AddingItem = (props) => {
    const [titleInputValue, setTitleInputValue] = useState('');
    const {callbackAddToDos} = props;
    
    console.log("value", titleInputValue)

    const handleTitleInput = (event) => {
        const value = event.target.value;
        console.log(value)
        setTitleInputValue(value);
    }

    const handleAddTask = () => {
        callbackAddToDos(titleInputValue);
    }

    return (
        <form className="to-do-form input-group mb-4 mt-5">
            <input
                className="form-control" 
                type="text"
                placeholder="Wpisz zadanie..."
                onChange={handleTitleInput}
             >
            </input>
            <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={handleAddTask}
                >
                Dodaj
            </button>
        </form>
    )

};