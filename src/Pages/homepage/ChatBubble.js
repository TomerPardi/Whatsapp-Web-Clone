import React from 'react'

export default function ChatBubble(props) {
    const{text,time,isSelf} = props.message;

    return (
        <div
            className={`chat-bubble ${isSelf ? "me" : "you"} `}>  
            {text}
            {time}
        </div>
    )
}
