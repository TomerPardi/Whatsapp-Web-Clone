import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useContext, useState } from 'react';
import AppContext from '../../AppContext';


const Utilsbuttons = (props) => {

    const sharedContext = useContext(AppContext)
    const [show, setShow] = useState(false);
    const [contactInput, setContactInput] = useState("");
    const [disabled, setDisabled] = useState(true);
    var button = document.getElementById("butt");

    const handleClose = () => {
        setShow(false);
        setContactInput("")
        setDisabled(true)
    }
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        sharedContext.userData[sharedContext.currentUser].contacts[contactInput] = [];
        props.setter(true)
        handleClose();
    }
    const handleChange = (event) => {
        setContactInput(event.target.value);
        if (contactInput) {
            setDisabled(false);
        }
    }

    return (
        <div className="wrap-search d-flex justify-content-around">

            <Button className='utilsBtn' variant='light' onClick={() => {
                //console.log(sharedContext.userData.tomer.contacts)
                sharedContext.currentUser = 'none'
                // localStorage.removeItem("user");
                window.location.replace("/");
            }}>
                <i className="bi bi-box-arrow-left"></i>&nbsp;
                Logout

            </Button>
            <Button className='utilsBtn' variant='light' onClick={handleShow}>
                <i className="bi bi-person-plus"></i>&nbsp;
                Add Contact
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new contact here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="newContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control placeholder="Contact's name" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button id="butt" variant="primary" onClick={handleAdd} disabled={disabled}>
                        Add Contact
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Utilsbuttons;
