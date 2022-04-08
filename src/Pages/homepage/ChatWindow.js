import React from 'react';
import AppContext from '../../AppContext';
import MessageBox from '../MessageBox';
import ChatBubble from './ChatBubble';
import { useContext,useState } from 'react';



const Chatwindow = (props) => {
// create an array with the messages, push the default messages
    let context = useContext(AppContext)
    const user = context.currentUser
    //messages.push({'text':'Hi from bubble!','isSelf':false},{'text':'Hi right back at ya!','isSelf':true})


    return (
        <div className="wrap-chat">
            <div className="chat">
                {/* turn the array into a map, and pass the message to it, thus rendering the messages from the array */}
               {props.messages.map(msg => <ChatBubble key={msg} message={msg} />)}
                </div>
        </div>
    );
}

export default Chatwindow;
