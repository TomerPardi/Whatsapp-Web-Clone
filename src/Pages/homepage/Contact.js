import React from 'react';
import avatar from './avatar.jpg';

const Contact = ({ contactName }) => {
    return (
        <div className="contact d-flex justify-content-start">
            <img src={avatar}></img>
            <div className="font-name">{contactName}</div>

        </div>

    );
}

export default Contact;
