import React from 'react';
import defaultImage from './default.jpg';


const Contact = ({ contactName, photo, lastMessage}) => {
    return (
        <div className="contact d-flex justify-content-start">
            <img src={photo.includes('blob') ? photo : require(`${photo}`)} alt={defaultImage}></img>
            <div className="font-name">
                <div>{contactName}</div>
                <div>{lastMessage.length < 30? lastMessage : lastMessage.substring(0, 30) + "..."}</div>
            </div>

        </div>

    );
}

export default Contact;
