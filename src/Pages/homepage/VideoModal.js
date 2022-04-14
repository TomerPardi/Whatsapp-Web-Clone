import React from 'react';
import { useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import AppContext from '../../AppContext';

export const CameraModal = (props) => {

    const context = useContext(AppContext)
    const [show, setShow] = useState(props.show);
    const [videoPath, setVideo] = useState();
    const [isRecording,setRecording] = useState(false);


    const handleClose = (stream) => {
        setVideo();
        setShow(false);
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        // clean the saved stream in the context
        context.stream = null;
        context.mediaRecorder = null;
    }

    const handleShow = () => setShow(true);
    
    function helperForCam(stream) {
        var canvas = document.getElementById("canv");
        var button = document.getElementById("recordButt");
        var button2 = document.getElementById("cancelButt");
        var button3 = document.getElementById("sendButt");
        var video = document.querySelector("#videoElement");
        
        var recordedChunks = [];
        var options = { mimeType: "video/webm;codecs=vp8" };
        
                  
        context.stream = stream;
        if (video == null) {
            stream.getTracks().forEach(function (track) {
                track.stop();
                stream.removeTrack(track);
            });
            return;
        }
        video.srcObject = stream;
        video.src = stream;
        var w = stream.videoWidth;
        var h = stream.videoHeight;
        video.addEventListener("loadedmetadata", function () {
            w = this.videoWidth
            h = this.videoHeight
            canvas.width = w;
            canvas.height = h;
        });
        if(context.mediaRecorder==null){
            context.mediaRecorder = new MediaRecorder(stream,options);
        }
        const mediaRecorder = context.mediaRecorder;
        mediaRecorder.ondataavailable = handleDataAvailable;

        function handleDataAvailable(event) {
            console.log("data-available");
            if (event.data.size > 0) {
              recordedChunks.push(event.data);
              console.log(recordedChunks);
            } 
            var blob = new Blob(recordedChunks, {
                type: "video/webm;codecs=vp8"
              });
            console.log(blob)
            var url = URL.createObjectURL(blob);
            console.log(url)
            setRecording(false)
            setVideo(url);
          }
        // take video button
        button.onclick = function () {
            //var stream = canvas.captureStream(25);
            if(isRecording){
                mediaRecorder.stop()
                button3.disabled = false;
                
            }
            else{
                mediaRecorder.start();
                setRecording(true)
            }

            };

        // cancel button
        button2.onclick = function () {
            handleClose(stream);
        };

        //send button
        button3.onclick = function () {
            props.handler(videoPath);
            handleClose(stream);
        };
    }

    function cam() {
        navigator.getUserMedia = (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        );
        if (context.stream == null) {
            navigator.getUserMedia({ video: true }, function (stream) { helperForCam(stream) }, function (err) { alert("there was an error " + err) });
        }
        else {
            helperForCam(context.stream)
        }

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
                            <video className='col' autoPlay={true} id="videoElement"
                                style={{
                                    'width': '100%',
                                    visibility: videoPath ? 'hidden' : 'visible',
                                    display: videoPath ? 'none' : 'flex'
                                }}>
                            </video>
                        }

                        {
                            videoPath && <video src={videoPath} style={{ 'width': '100%' }} controls autoPlay></video>
                        }

                        {show && cam()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id="cancelButt" variant="secondary">
                        Cancel
                    </Button>
                    <Button id="recordButt" variant={isRecording? 'danger':"success"}>
                        {isRecording? 'Stop recording':"Start Recording"}
                        </Button>
                    <Button id="sendButt" variant="primary" disabled={true}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CameraModal