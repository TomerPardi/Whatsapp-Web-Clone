import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (e) => {
        e.preventDefault();
        console.log("click click");
    }

    function cam() {
        navigator.getUserMedia({ video: true }, function (stream) {
            var video = document.getElementById("v");
            var canvas = document.getElementById("c");
            var button = document.getElementById("b");
            video.src = stream;
            button.disabled = false;
            button.onclick = function () {
                canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
                var img = canvas.toDataURL("image/png");
                alert("done");
            };
        }, function (err) { alert("there was an error " + err) });
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
                    <video id="vid" width="300" height="300"></video>
                    <input id="butt" type="button" disabled="true" value="Take Picture"></input>
                    <canvas id="canv" style="display:none;" width="300" height="300"></canvas>

                    Say cheese!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClick}>Take photo</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
