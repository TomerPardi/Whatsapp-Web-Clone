import React from 'react';
import MessageBox from '../MessageBox';
import ChatBubble from './ChatBubble';

const Chatwindow = () => {
// create an array with the messages, push the default messages
    let messages = []
    messages.push({'text':'Hi from bubble!','isSelf':false},{'text':'Hi right back at ya!','isSelf':true})

    return (

        <div className="wrap-chat">
            <div className="chat">
                {/* turn the array into a map, and pass the message to it, thus rendering the messages from the array */}
               {messages.map(msg => <ChatBubble message={msg} />)}
                </div>
        </div>
    );
}

export default Chatwindow;
