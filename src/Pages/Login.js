

import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';
import { Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


function Login() {

    let navigate = useNavigate();
    const sharedContext = useContext(AppContext)
    var db = sharedContext.credentialsDB
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        const form = document.getElementById("form");
        const username = document.getElementById("uname");
        const password = document.getElementById("password");
        // on each time the user submits the form
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()
            if (!form.checkValidity()) {
                form.classList.add('was-validated')
                return;
            }

            if (db[username.value]) {
                if (db[username.value] === password.value) {
                    // TODO: remove local storage access
                    sharedContext.currentUser = username.value;
                    // localStorage.setItem("user", username.value);
                    navigate("../home", { replace: true });
                } else {
                    setShow(true);
                    // alert("Wrong username or password!");
                    return;

                }
            } else {
                setShow(true);
                // alert("Wrong username or password!");
                return
            }

        }, false)
    }, []);


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                    <div class="alert alert-danger" role="alert" style={{marginBottom: "0rem" }}>
                        Wrong username or password!
                    </div>
            </Modal>

            <img id="myimg" src="plane.png" alt=""></img>
            <section id='section' className="h-100">
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                    <Form id="form" className="needs-validation" noValidate autoComplete="off">
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="uname">Username</label>
                                            <Form.Control id="uname" type="text" className="form-control" placeholder="Username" name="uname" required autoFocus></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Username is required!
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>
                                            </div>
                                            <Form.Control id="password" type="password" className="form-control" placeholder="Password" name="password" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Password is required!
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <button type="submit" className="btn btn-primary ms-auto">
                                                Login
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Don't have an account? <Link to='/register'>Register now!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Login;
