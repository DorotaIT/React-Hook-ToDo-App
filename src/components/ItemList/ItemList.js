import React from 'react';
import './ItemList.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultTags } from '../../data/tags';

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
                {getTagName(tag)}
            </div>
        ))
    }

    const getTagName = (tagKey) => {
        console.log("tagkey", tagKey);
        
        
        const searchedNameTag = defaultTags.findIndex(() => === );
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