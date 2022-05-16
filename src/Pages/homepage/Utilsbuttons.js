import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { useNavigate } from "react-router-dom";
import { getByDisplayValue } from "@testing-library/react";
import context from "react-bootstrap/esm/AccordionContext";

const Utilsbuttons = (props) => {
  let navigate = useNavigate();
  const sharedContext = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactNick, setContactNick] = useState("");
  const [contactServer, setContactServer] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleClose = () => {
    setShow(false);
    setContactName("");
    setDisabled(true);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleAdd = async (e) => {
    // TODO: for some reason this line was commented...
    e.preventDefault()

    try {
      let res = await fetch(`http://localhost:7066/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          UserId: contactName,
          Name: contactNick,
          Server: contactServer,
        }),
      });
      // TODO: return token from server
      
      if (res.status === 200) {
        // contact exists, server added it to contacts list
        // server generated empty messages list
        props.setter(true);
      } else {
        // TODO: need to differentiate between server respone
        // 1) the contact that client wish to add is already in his list
        alert("User already exist in your contacts list!");
        // 2) the contact that client wish to add is himself
        alert("unfortunately you cannot add yourself to your contacts list");
        // 3) the contact that client wish to add is not exist in the system
        alert("User doesn't exist!");
      }
      handleClose();
    } catch (err) {
      console.log(err);
    }

    try {
      let res = await fetch(`http://${contactServer}/api/invitations/`, {
        method: "POST",
        body: JSON.stringify({
          From: context.currentUser,
          To: contactName,
          Server: "localhost:7066",
        }),
      });
      
    } catch (err) {
      console.log(err);
    }

  };
  const handleChangeName = (event) => {
    setContactName(event.target.value);
    if (contactName && contactNick && contactServer) {
      setDisabled(false);
    }
  };

  const handleChangeNick = (event) => {
    setContactNick(event.target.value);
    if (contactName && contactNick && contactServer) {
      setDisabled(false);
    }
  };

  const handleChangeServer = (event) => {
    setContactServer(event.target.value);
    if (contactName && contactNick && contactServer) {
      setDisabled(false);
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter" && !disabled) {
      handleAdd();
    }
  };

  return (
    <div className='wrap-search d-flex justify-content-around'>
      <Button
        className='utilsBtn'
        variant='light'
        onClick={() => {
          // TODO: fetch request to logout from server!
          fetch(`http://localhost:7066/Logout`);
          // localStorage.removeItem("user");
          navigate("/", { replace: true });
          sharedContext.activeContact = "none";
          props.setter(true);
        }}
      >
        <i className='bi bi-box-arrow-left'></i>&nbsp; Logout
      </Button>
      <Button className='utilsBtn' variant='light' onClick={handleShow}>
        <i className='bi bi-person-plus'></i>&nbsp; Add Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className='mb-3' controlId='newContact'>
              <Form.Label>Contact's ID (Username)</Form.Label>
              <Form.Control
                id='input'
                placeholder="Contact's ID"
                onChange={handleChangeName}
                onKeyDown={handleKey}
                autoFocus
              />
              <Form.Label>Contact's Nickname</Form.Label>
              <Form.Control
                id='input'
                placeholder="Contact's nickname"
                onChange={handleChangeNick}
                onKeyDown={handleKey}
                autoFocus
              />
              <Form.Label>Contact's Server</Form.Label>
              <Form.Control
                id='input'
                placeholder="Contact's server"
                onChange={handleChangeServer}
                onKeyDown={handleKey}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            id='butt'
            variant='success'
            onClick={(e) => {
              handleAdd(e);
            }}
            disabled={disabled}
          >
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Utilsbuttons;
