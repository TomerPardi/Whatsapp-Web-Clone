import React from 'react'
import PhotoViewModal from './PhotoViewModal';
import { render } from '@testing-library/react';


export default function ChatBubble(props) {
    const { text, time, isSelf, type, photo, audio } = props.message;


    function handleShowFull(photo){
        render(
            <PhotoViewModal show={true} photo={photo}/>
        )
    }


    if (type === 'photo') {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                <img src={(photo.includes('64') || photo.includes('blob'))? photo : require(`${photo}`)}
                style={{ maxWidth: '200px' }}
                onClick= {()=>{handleShowFull(photo)}}
                />
                <br>
                </br>
                {text}
                <h6 className="text-muted" style={{ "justifySelf": 'right' }}>{time}</h6>
            </div>
        )
    }
    else if (type === 'audio') {
        // console.log(audio);
        return (
            <div className={`chat-bubble ${isSelf ? "me" : "you"} player`}>
                <audio controls src={audio} id='player' style={{ maxHeight: '50px' }}></audio>
                {text}
                <h6 className="text-muted" style={{ "justifySelf": 'right' }}>{time}</h6>
            </div>
        )

    }

    else {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"}`}>
                {text}
                <h6 className="text-muted" style={{ "justifySelf": 'right' }}>{time}</h6>
            </div>
        )
    }
}
