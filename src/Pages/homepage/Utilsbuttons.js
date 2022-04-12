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
    const handleShow = () =>{
        setShow(true);

    }
    const handleAdd = () => {

        if(contactInput in sharedContext.userData){
            sharedContext.userData[sharedContext.currentUser].contacts[contactInput] = [];
        props.setter(true)
        }
        else{
            alert('User doesn\'t exist!')
        }
        handleClose();
    }
    const handleChange = (event) => {
        setContactInput(event.target.value);
        if (contactInput) {
            setDisabled(false);
        }
    }

    const handleKey = (event) => {
        if(event.key==='Enter'){
            handleAdd();
        }
    }

    return (
        <div className="wrap-search d-flex justify-content-around">

            <Button className='utilsBtn' variant='light' onClick={() => {
                console.log("pressed button")
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
                            <Form.Control id='input' placeholder="Contact's name" onChange={handleChange} onKeyDown={handleKey} autoFocus/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button id="butt" variant="success" onClick={handleAdd} disabled={disabled}>
                        Add Contact
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Utilsbuttons;
