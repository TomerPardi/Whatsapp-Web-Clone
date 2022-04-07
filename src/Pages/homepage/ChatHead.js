import React from 'react';
import image1 from "./daniel.png"

const Chathead = () => {
    return (
        <div className="chat-head">
            <img src={image1}></img>
            <div className="chat-name">
                <h1 className="font-name">Daniel Bronfman</h1>
                {/* <p className="font-online"></p> */}
            </div>

        </div>
    );
}

export default Chathead;
