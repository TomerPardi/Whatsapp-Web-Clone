import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

export default function ChatBubble(props) {
    const { text, time, isSelf, type, photo, audio } = props.message;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (type === 'photo') {
        return (
            <div
                className={`chat-bubble ${isSelf ? "me" : "you"} `}>
                {/* <img src={(photo.includes('64') || photo.includes('blob')) ? photo : require(`${photo}`)} style={{ maxWidth: '200px' }} /> */}
                <Button variant="link" className=' shadow-none' onClick={handleShow}>
                    <img src={(photo.includes('64') || photo.includes('blob')) ? photo : require(`${photo}`)} style={{ maxWidth: '200px' }} />
                </Button>

                <Modal show={show} onHide={handleClose}>

                    <Modal.Body><img className=" card-img" src={(photo.includes('64') || photo.includes('blob')) ? photo : require(`${photo}`)} /></Modal.Body>
                </Modal>
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
