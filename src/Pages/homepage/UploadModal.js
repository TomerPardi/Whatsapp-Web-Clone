import React from "react"
import { useEffect, useState } from "react"
import { Button, Modal, Form } from 'react-bootstrap';


export default function ImageUpload(props) {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [show, setShow] = useState(props.show)

    const handleClose = () => {
        setShow(false);
    }
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <>
            {/* <div>
                <input type='file' onChange={onSelectFile} />
                {selectedFile && <img src={preview} />}
            </div> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add file</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 position-relative" controlId="newContact">
                            <Form.Label>Add file</Form.Label>
                            <Form.Control id='input' type='file' placeholder="Upload" onChange={onSelectFile} autoFocus />
                            <div>{selectedFile && <img src={preview} className="card-img" />}</div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}