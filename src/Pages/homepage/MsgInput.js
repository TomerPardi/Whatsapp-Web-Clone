import React from 'react';

const Msginput = () => {
    return (
        <div className="wrap-message">
            <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i>
            <div className="message">
                <input type="text" className="input-message" placeholder="Write a message here"></input>
            </div>
            <i className="fa fa-microphone fa-lg" aria-hidden="true"></i>
        </div>
    );
}

export default Msginput;
