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
        if(titleInputValue === "") {
            console.log("error");
        } else {
        callbackAddToDos(titleInputValue);
        setTitleInputValue("");
        }
    }

    const addItemAfterEnterPress = () => {
        if (titleInputValue !== '') {
        callbackAddToDos(titleInputValue);
        setTitleInputValue("");
    } else {
        console.log("error");
    }
    }

    const handleEnterKeyPress = (event) => {
        if(event.key === "Enter") { 
            event.preventDefault();
            addItemAfterEnterPress();
            return false; 
        } 
    }

    return (
        <>
            <form className="to-do-form input-group container mb-4 mt-5 container-fluid">
                <div className="row w-100">
                    <input
                        className="form-control col-md-5" 
                        type="text"
                        placeholder="Wpisz zadanie..."
                        onChange={handleTitleInput}
                        onKeyPress={handleEnterKeyPress}
                        value={titleInputValue}
                    >
                    </input>
                    <div class="form-group col-md-5">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Wybierz tag...</option>
                            <option>Zakupy</option>
                            <option>Programowanie</option>
                            <option>Zwierzęta</option>
                            <option>Prace domowe</option>
                        </select>
                    </div>
                    <button 
                        className="btn btn-outline-secondary btn-block col-md-2" 
                        type="button"
                        onClick={handleAddTask}
                        >
                        Dodaj
                    </button>    
                </div> 
            </form>
                <div className="row">
                    <div className="alert alert-danger w-100 p-3" role="alert">
                        Uzupełnij dane!
                    </div>
                </div>
        </>
    )

};