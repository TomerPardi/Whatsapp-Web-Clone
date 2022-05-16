import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import VideoModal from "./homepage/VideoModal";
import Button from "react-bootstrap/Button";
import useRecorder from "../useRecorder";
import { useContext } from "react";
import AppContext from "../AppContext";

export default function MessageInput(props) {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [existingRecord, setRecorded] = useState(false);
  const [isLive, setLive] = useState(false);
  const [active, setActive] = useState(context.activeContact);
  const [isShown, setIsShown] = useState(false);

  let context = useContext(AppContext);
  const user = context.currentUser;
  const messages = props.messages;
  // ############
  var counterMessages;
  // if (context.userData[context.activeContact].contacts[user] === undefined) {
  //   context.userData[context.activeContact].contacts[user] = [];
  //   counterMessages = context.userData[context.activeContact].contacts[user];
  // } else {
  //   counterMessages = context.userData[context.activeContact].contacts[user];
  // }

  function handleSelect(event) {}

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const message = document.getElementById("messageIn");
    if (message.value === "") {
      return;
    }

    // on each time the user submits the form
    // TODO: post to my messages with current active user

    // the server insert the message to the messages list with active contact
    try {
      await fetch(`https://localhost:7066/api/contacts/${active}/messages`, {
        method: "POST",
        body: JSON.stringify({
          Message: message,
          ContactID : active,
        }),
      });
    } catch (err) {
      console.log(err);
    }

    try {
      let res1 = await fetch(`https://localhost:7066/api/contacts/${context.activeContact}`)
      await fetch(`https://${res1.server}/api/transfer`, {
        method: "POST",
        body: JSON.stringify({
          From: user,
          To: active,
          Content: message,
        }),
      });
      
    } catch (err) {
      console.log(err);
    }

    // messages.push({
    //   text: message.value,
    //   isSelf: true,
    //   time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    // });

    // counterMessages.push({
    //   text: message.value,
    //   isSelf: false,
    //   time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    // });
    props.setter(true);
    message.value = "";
  }
  // TODO: discuss whether this condition test is needed
  // moreover, "ActiveUser" attribute is not even exists in context :)
  return (
    <div className='wrap-message'>
      <InputGroup
        className='d-flex justify-content-center'
        style={{ flexWrap: "nowrap" }}
        onKeyPress={handleKeyPress}
      >
        {/* Set title as link to the icon (link from https://icons.getbootstrap.com/#usage) */}
        {!existingRecord && !isLive && (
          <DropdownButton
            id={"dropdown-button-drop-up"}
            drop='up'
            size='sm'
            variant={isRecording ? "danger" : "light"}
            title={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-paperclip'
                viewBox='0 0 16 16'
              >
                <path d='M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z' />
              </svg>
            }
            onSelect={handleSelect}
            style={{ width: "0rem" }}
          ></DropdownButton>
        )}

        {!existingRecord && !isLive && (
          <div className='messageForm'>
            <FormControl
              className='col align-self-stretch'
              placeholder={
                isLive ? "Recording in progress" : "Enter message here"
              }
              id='messageIn'
              required
            />
          </div>
        )}
        {!isLive && (
          <Button
            variant='light'
            type='submit'
            onClick={handleSubmit}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-send-check-fill'
                viewBox='0 0 16 16'
              >
                <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z' />
                <path d='M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-send'
                viewBox='0 0 16 16'
              >
                <path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
              </svg>
            )}
          </Button>
        )}
      </InputGroup>
    </div>
  );
}
