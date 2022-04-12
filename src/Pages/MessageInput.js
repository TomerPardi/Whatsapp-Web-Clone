import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import useRecorder from '../useRecorder'
import { useContext } from 'react';
import AppContext from '../AppContext';
import CameraModal from './homepage/CameraModal';
import { render } from '@testing-library/react';
import wave from './homepage/wave.gif'

export default function MessageInput(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const [existingRecord, setRecorded] = useState(false);
    const [changed, setChanged] = useState(false);
    const [isLive, setLive] = useState(false);
    const [isShown, setIsShown] = useState(false);

    let context = useContext(AppContext)
    //TODO : dynamically get contact in question
    const user = context.currentUser;
    const messages = props.messages

    function handleSelect(event) {

        switch (event) {
            case '1':
                console.log(event);
                render(
                    <div>
                        <CameraModal show={true} handler={handlePhoto} />
                    </div>
                )
                break
            case '3': handleRecord();
                break
            default: return
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    }

    function handleRecord() {

        console.log("Recording pressed");
        if (isRecording) {
            stopRecording();
            console.log("recording stopped")
            setRecorded(true)
            setLive(false)
        }
        else {
            console.log("started record")
            startRecording();
            setLive(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (existingRecord) {
            messages.push({ 'audio': audioURL, 'isSelf': true, 'time': new Date().toTimeString().split(' ')[0].slice(0, -3), 'type': 'audio' })
            setRecorded(false);
            props.setter(true);
            return;
        }
        const message = document.getElementById("messageIn");
        if (message.value === '') {
            return;
        }
        // on each time the user submits the form
        messages.push({ 'text': message.value, 'isSelf': true, 'time': new Date().toTimeString().split(' ')[0].slice(0, -3) })
        props.setter(true)
        message.value = ''
    };

    function handlePhoto(photoPath) {
        messages.push({ 'isSelf': true, 'time': new Date().toTimeString().split(' ')[0].slice(0, -3), 'photo': photoPath, type: 'photo' })
        props.setter(true)
    }

    if (context.ActiveUser != 'none') {
        return (

            <div className="wrap-message">
                <InputGroup className="d-flex justify-content-center" style={{ flexWrap: 'nowrap' }} onKeyPress={handleKeyPress} >

                    {/* Set title as link to the icon (link from https://icons.getbootstrap.com/#usage) */}
                    {
                        !existingRecord && !isLive &&
                        <DropdownButton
                            id={'dropdown-button-drop-up'}
                            drop='up'
                            size="sm"
                            variant={isRecording ? 'danger' : 'light'}
                            title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                            </svg>}
                            onSelect={handleSelect}
                            style={{ width: '0rem' }}
                        >
                            <Dropdown.Item eventKey="1" className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>

                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" align="center" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                                </svg>


                            </Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                </svg>

                            </Dropdown.Item>
                        </DropdownButton>

                    }
                    {
                        isLive && <Button className='pause-btn' id='pause-btn' variant='danger' onClick={() => {
                            handleRecord();
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-stop-fill" viewBox="0 0 16 16">
                                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                            </svg>
                        </Button>
                    }
                    {
                        existingRecord &&
                        <Button onClick={() => { setRecorded(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </Button>
                    }

                    {
                        existingRecord &&
                        <div className='recorderForm'>
                            <audio className='recorderForm col align-self-stretch' src={audioURL} controls id='player'>
                            </audio>
                        </div>
                    }
                    {
                        !existingRecord && isLive &&
                        <div className='recorderForm'>
                            <img className='recorderForm col align-self-stretch' src={wave} id='gif'>
                            </img>
                        </div>
                    }
                    {
                        !existingRecord && !isLive &&
                        <div className='messageForm' >
                            <FormControl className='col align-self-stretch'
                                placeholder={isLive ? "Recording in progress" : 'Enter message here'}
                                id='messageIn' required />
                        </div>
                    }
                    {
                        !isLive &&
                        <Button variant='light' type='submit' onClick={handleSubmit} onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)} >
                            {isShown ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-check-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>}

                        </Button>
                    }

                </InputGroup>
            </div>
        )
    }
}

