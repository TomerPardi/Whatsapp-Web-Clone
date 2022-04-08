import React, { Component, useState } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap';
import useRecorder from '../useRecorder'
import { useContext } from 'react';
import AppContext from '../AppContext';
import { setMessages } from './homepage/ChatWindow';

export default function MessageInput(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const [existingRecord, setRecorded] = useState(false);
    const [changed,setChanged] = useState(false);
    let context = useContext(AppContext)
    //TODO : dynamically get contact in question
    const user = context.currentUser;
    const messages = props.messages

    function handleRecord(e) {

        e.preventDefault();
        console.log("Recording pressed");
        if (isRecording) {
            stopRecording();
            setRecorded(true)
        }
        else {
            startRecording();
        }
    }

    function handleSubmit(event){
        const message = document.getElementById("messageIn");
        // on each time the user submits the form
        messages.push({'text':message.value,'isSelf':true})
        props.setter(true)
        message.value = ''
    };

    return (

        <div className="wrap-message">
            <InputGroup className="d-flex justify-content-center" style={{flexWrap:'nowrap'}} >
                {/* Set title as link to the icon (link from https://icons.getbootstrap.com/#usage) */}
                {
                     !existingRecord &&
                    <DropdownButton
                    id={'dropdown-button-drop-up'}
                    drop='up'
                    variant={isRecording ? 'danger' : 'primary'}
                    title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>}
                >
                    <Dropdown.Item eventKey="1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>
                        <div>
                            Take Picture
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" align="center" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                        </svg>
                        <div>
                            Shoot a video
                        </div>

                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={handleRecord}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <div>Record Audio</div>

                    </Dropdown.Item>
                
                </DropdownButton>
                }
                {
                    existingRecord &&
                    <Button onClick={() => { setRecorded(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
                    !existingRecord &&
                    <div className='messageForm' >
                        <FormControl className='col align-self-stretch' placeholder='Enter message here' id='messageIn' />
                    </div>
                }

                <Button type='submit' onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </Button>
            </InputGroup>
        </div>
    )
}

