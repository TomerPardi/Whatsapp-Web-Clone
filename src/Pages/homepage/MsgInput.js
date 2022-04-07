import React from 'react';

const Msginput = () => {
    return (
        <div className="wrap-message">
            <button className='chat-icons'>
                <i class="bi bi-paperclip"></i>
            </button>
            <div className="message">
                <input type="text" className="input-message" placeholder="Write a message here"></input>
            </div>
            <button className='chat-icons'>
                <i className="bi bi-arrow-up-right-circle"></i>
            </button>
        </div>
    );
}

export default Msginput;
