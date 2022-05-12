import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { useNavigate } from "react-router-dom";

const Utilsbuttons = (props) => {
  let navigate = useNavigate();
  const sharedContext = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [contactInput, setContactInput] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleClose = () => {
    setShow(false);
    setContactInput("");
    setDisabled(true);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleAdd = async (e) => {
    // TODO: for some reason this line was commented...
    e.preventDefault()

    try {
      let res = await fetch("url_of_server", {
        method: "POST",
        body: JSON.stringify({
          contact: contactInput,
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
  };
  const handleChange = (event) => {
    setContactInput(event.target.value);
    if (contactInput) {
      setDisabled(false);
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
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
          fetch("url_of_server");
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
              <Form.Label>Contact</Form.Label>
              <Form.Control
                id='input'
                placeholder="Contact's name"
                onChange={handleChange}
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
