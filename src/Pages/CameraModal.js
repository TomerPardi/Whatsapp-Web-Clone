import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function cam(){
        navigator.getUserMedia({video: true}, function(stream) {
		var canvas = document.getElementById("canv");
		var button = document.getElementById("butt");
        var video = document.querySelector("#videoElement");
        video.srcObject = stream;
		video.src = stream;
		button.disabled = false;
		button.onclick = function() {
			canvas.getContext("2d").drawImage(video);
			var img = canvas.toDataURL("image/png");
			alert("done");
            console.log(img)
		};
	}, function(err) { alert("there was an error " + err)});
}

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Camera Mode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input id="butt" type="button" disabled="true" value="Take Picture"></input>
                <canvas id="canv"  style={{width:"300", height:"300",display:'none'}}></canvas>
	            <video autoplay="true" id="videoElement" style={{width:"100vw", height:"100vh"}}>
	            </video>
                {cam()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Take photo</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
