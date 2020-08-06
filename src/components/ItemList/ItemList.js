import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './ItemList.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ItemList = (props) => {
    const {item} = props;
    const {callbackToggleIsDone} = props;
    const {callbackDeleteItem} = props;

    const handleToggleIsDone = () => {
        callbackToggleIsDone(item.id);
    }

    const handleDeleteItem = () => {
        callbackDeleteItem(item.id);
    }

    const renderTags = () => {
        return item.tags.map ( (tag) => (
            <div>
                {tag}
            </div>
        ))
    }

    const getTagName = () => {
        
    }

    return (
       <li className="list-group-item">
           <div 
                className="btn float-left"
                onClick={handleToggleIsDone}
           >
                <FontAwesomeIcon
                    icon={ item.isDone ? faCheckCircle : faCircle }
                />
           </div>

           {item.title}
           {renderTags()}

            <div 
                className="btn float-right"
                onClick={handleDeleteItem}
                >
                <FontAwesomeIcon
                    icon={faTrash}
                />
            </div>

           <div className="btn float-right">
                <FontAwesomeIcon
                    icon={faEdit}
                />
            </div>
       </li>
    )

};