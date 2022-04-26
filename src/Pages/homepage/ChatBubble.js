import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ChatBubble(props) {
  const { text, time, isSelf, type, photo, audio, video, loc, linkGoogle } =
    props.message;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (type === "photo") {
    return (
      <div className={`chat-bubble ${isSelf ? "me" : "you"} `}>
        <Button variant='link' className=' shadow-none' onClick={handleShow}>
          <img
            src={
              photo.includes("64") || photo.includes("blob")
                ? photo
                : require(`${photo}`)
            }
            style={{ maxWidth: "200px" }}
            alt='img'
          />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <img
              className=' card-img'
              src={
                photo.includes("64") || photo.includes("blob")
                  ? photo
                  : require(`${photo}`)
              }
              alt='img'
            />
          </Modal.Body>
        </Modal>

        {text}
        <h6 className='text-muted' style={{ justifySelf: "right" }}>
          {time}
        </h6>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className={`chat-bubble ${isSelf ? "me" : "you"} `}>
        <Button variant='link' className=' shadow-none' onClick={handleShow}>
          <video src={video} style={{ maxWidth: "200px" }} controls />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <video className=' card-img' src={video} controls />
          </Modal.Body>
        </Modal>

        {text}
        <h6 className='text-muted' style={{ justifySelf: "right" }}>
          {time}
        </h6>
      </div>
    );
  } else if (type === "audio") {
    return (
      <div className={`chat-bubble ${isSelf ? "me" : "you"} player`}>
        <audio
          controls
          src={
            audio.includes("blob")
              ? audio
              : require(`${audio}`)
          }
          id='player'
          style={{ maxHeight: "50px" }}
        ></audio>
        {text}
        <h6 className='text-muted' style={{ justifySelf: "right" }}>
          {time}
        </h6>
      </div>
    );
  } else if (type === "location") {
    return (
      <div className={`chat-bubble ${isSelf ? "me" : "you"} player`}>
        <a href={linkGoogle} target='_blank' rel='noreferrer'>
          <img src={loc} style={{ maxWidth: "200px" }} alt='img'></img>
        </a>

        <h6 className='text-muted' style={{ justifySelf: "right" }}>
          {time}
        </h6>
      </div>
    );
  } else {
    return (
      <div className={`chat-bubble ${isSelf ? "me" : "you"}`}>
        {text}
        <h6 className='text-muted' style={{ justifySelf: "right" }}>
          {time}
        </h6>
      </div>
    );
  }
}
