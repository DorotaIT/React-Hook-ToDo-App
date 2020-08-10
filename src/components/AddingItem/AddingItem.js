import React, {useState} from 'react';
import { defaultTags } from '../../data/tags';
import './AddingItem.css';

export const AddingItem = (props) => {
    const [titleInputValue, setTitleInputValue] = useState('');
    const [isValid, setIsValid] = useState();
    const [tagValue, setTagValue] = useState('');
    const {callbackAddToDos} = props;

    const handleTitleInput = (event) => {
        const value = event.target.value;
        checkValidation(value);
        setTitleInputValue(value);
    }

    const checkValidation = (inputValue = titleInputValue) => {
       if(inputValue === "") {
           setIsValid(false);
       } else {
           setIsValid(true);
       }
    }

    const handleChooseTag = (event) => {
        console.log("eventTarget", event.target.value);
        const value = event.target.value;
        setTagValue(value);
    }

    const addItem = () => {
        callbackAddToDos(titleInputValue, tagValue);
        setTitleInputValue("");
        setTagValue("");
        setIsValid(false);
    }

    const handleEnterKeyPress = (event) => {
        if(event.key === "Enter") { 
            event.preventDefault();
            if(isValid) {
                addItem(); 
            }
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
                    <div className="form-group col-md-5">
                        <select 
                            className="form-control" 
                            id="exampleFormControlSelect1"
                            onChange={handleChooseTag}
                            >
                            <option>Wybierz tag...</option>
                            {defaultTags.map ( (tag) => (
                                <option value={tag.value}>{tag.name}</option>
                            ))}
                        </select>
                    </div>
                    <button 
                        className="btn btn-outline-secondary btn-block col-md-2" 
                        type="button"
                        disabled={ !isValid }
                        onClick={addItem}
                        >
                        Dodaj
                    </button>    
                </div> 
            </form>
        </>
    )

};