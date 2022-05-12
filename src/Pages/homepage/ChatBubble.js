import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ChatBubble(props) {
  // JSON object - {id, content, created, sent}
  const { id, content, created, sent } = props.message;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // TODO: check whether "sent" is false in case i sent the message
    <div className={`chat-bubble ${sent ? "you" : "me"}`}>
      {content}
      <h6 className='text-muted' style={{ justifySelf: "right" }}>
        {created}
      </h6>
    </div>
  );
}
