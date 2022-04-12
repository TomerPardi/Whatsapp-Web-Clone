import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CameraModal(props) {
    const [show, setShow] = useState(props.show);
    const [photo, setPhoto] = useState();

    const handleClose = () => {
        setPhoto();
        setShow(false);
    }
    const handleShow = () => setShow(true);

    function cam() {
        navigator.getUserMedia = (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        );

        navigator.getUserMedia({ video: true }, function (stream) {
            var canvas = document.getElementById("canv");
            var button = document.getElementById("butt");
            var button2 = document.getElementById("butt2");
            var button3 = document.getElementById("butt3");
            var video = document.querySelector("#videoElement");
            video.srcObject = stream;
            video.src = stream;

            var w = stream.videoWidth;
            var h = stream.videoHeight;
            video.addEventListener("loadedmetadata", function () {
                //console.log("width:", this.videoWidth);
                w = this.videoWidth
                h = this.videoHeight
                canvas.width = w;
                canvas.height = h;
                //console.log("height:", this.videoHeight);
            });
            button.onclick = function () {
                // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                console.log("width:", w);
                console.log("height:", h);
                canvas.getContext("2d").drawImage(video, 0, 0, w, h, 0, 0, w, h);
                var img = canvas.toDataURL("image/png");
                setPhoto(img);
                console.log(img);
                button3.disabled = false;
            };
            button2.onclick = function () {
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
                handleClose();
            };
            button3.onclick = function () {
                props.handler(photo);
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
                handleClose();
            };

        }, function (err) { alert("there was an error " + err) });
    }

    return (
        <>

            {/* <Button variant="primary" onClick={handleShow} style={{ display: 'none' }}>
            </Button> */}

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
                    <div className='container'>
                        <canvas id="canv" style={{ width: '500', height: '500', display: 'none' }}></canvas>
                        {
                            <video className='col' autoplay="true" id="videoElement"
                                style={{
                                    'width': '100%',
                                    visibility: photo ? 'hidden' : 'visible',
                                    display: photo ? 'none' : 'flex'
                                }}>
                            </video>
                        }

                        {
                            photo && <img src={photo} style={{ 'width': '100%' }}></img>
                        }

                        {show && cam()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id="butt2" variant="secondary">
                        Cancel
                    </Button>
                    <Button id="butt" variant="primary">Take photo</Button>
                    <Button id="butt3" variant="primary" disabled={true}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
