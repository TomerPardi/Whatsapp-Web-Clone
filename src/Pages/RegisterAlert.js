import { Alert, Button,Modal } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { render } from "@testing-library/react";
import { Link, useNavigate } from "react-router-dom";


export default function RegisterAlert(props) {
    const [show, setShow] = useState(props.show);
  
    const handleClose = () => {
        setShow(false);
        props.navigate("../home", { replace: true });
    }

    const handleShow = () => setShow(true);
  
    return (
      <>  
        <Modal variant='success' show={show} onHide={handleClose} >
          <Modal.Header >
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Registration successful, Proceed to Login page</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  