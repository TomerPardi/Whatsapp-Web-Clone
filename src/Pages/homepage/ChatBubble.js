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
                <h6 class="text-muted" style={{"justifySelf":'right'}}>{time}</h6>
            </div>
        )
    }
    else if (type === 'audio') {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                {text}
                <h6 class="text-muted" style={{"justifySelf":'right'}}>{time}</h6>
            </div>
        )

    }

    else {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                {text}
                <h6 class="text-muted" style={{"justifySelf":'right'}}>{time}</h6>
            </div>
        )
    }
}
