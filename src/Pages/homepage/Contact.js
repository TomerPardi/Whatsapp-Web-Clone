import React from 'react';
import defaultImage from './default.jpg';


const Contact = ({ contactName, photo, lastMessage, isSelf}) => {
    return (
        <div className="contact d-flex justify-content-start align-items-center">
            <img src={photo.includes('blob') ? photo : require(`${photo}`)} alt={defaultImage}></img>
            <div className="font-name">
                <div className='fw-bolder'>{contactName}</div>
                <div className="fw-light">{(isSelf? "Me: " : "") + (lastMessage.length < 30? lastMessage : lastMessage.substring(0, 30) + "...")}</div>
            </div>

        </div>

    );
}

export default Contact;
