import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ItemList.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const ItemList = (props) => {
    const {item} = props;

    return (
       <li className="list-group-item">
           <div className="btn float-left">
                <FontAwesomeIcon
                    icon={faCircle}
                />
           </div>

           {item.title}

            <div className="btn float-right">
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