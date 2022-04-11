import React from 'react';
import defaultImage from './default.jpg';


const Contact = ({ contactName,photo }) => {
    return (
        <div className="contact d-flex justify-content-start">
            <img src={photo.includes('blob')? photo : require(`${photo}`)} alt={defaultImage}></img>
            <div className="font-name">{contactName}</div>
        </div>

    );
}

export default Contact;
