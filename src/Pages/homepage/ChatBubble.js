import React from 'react'

export default function ChatBubble(props) {
    const { text, time, isSelf,type, photo, audio} = props.message;

    if (type === 'photo') {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                <img src={require(`${photo}`)} style={{maxWidth: '200px'}}/>
                <br>
                </br>
                {text}
                {time}
            </div>
        )
    }
    else if (type === 'audio') {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                {text}
                {time}
            </div>
        )

    }

    else {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                {text}
                {time}
            </div>
        )
    }
}
