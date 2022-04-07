import React from 'react';

const Contact = ({contactName}) => {
    return (
        <a href="#" className="list-group-item list-group-item-action">
            {contactName}
        </a>
    );
}

export default Contact;
