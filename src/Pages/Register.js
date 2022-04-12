import { Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';



function Register() {
    const [file, setFile] = useState()
    let navigate = useNavigate()
    let sharedContext = useContext(AppContext);
    let db = sharedContext.credentialsDB;
    let data = sharedContext.userData;


    useEffect(() => {
        const form = document.getElementById("form");
        const username = document.getElementById("uname");
        const password = document.getElementById("password");
        const nickname = document.getElementById("nick");
        const password2 = document.getElementById("password2");
        const image = document.getElementById("img");


        // each time the user submits the form
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            event.stopPropagation()
            if (!form.checkValidity()) {
                form.classList.add('was-validated')
                return;
            }
            else {

                if (password.value != password2.value) {
                    alert("Passwords are not matching!");
                    return;
                }
                else if (db[username.value]) {
                    alert("Selected username already exists!")
                    return;
                }
                else {

                    db[username.value] = password.value;
                    sharedContext.credentialsDB = db;
                    data[username.value] = {
                        "photo": window.webkitURL.createObjectURL(image.files[0]),
                        "nickname": nickname.value,
                        "contacts": {
                        }
                    }
                    console.log(data[username.value])
                    alert("Registration successful, proceeding to login page.");
                    sharedContext.userData = data;
                    navigate("../home", { replace: true });
                    // TODO: we need also save nickname, picture, etc...
                    return;
                }
            }

        }, false)
    }, []);

    return (
        <>
            <img id="myimg" src="plane.png" alt=""></img>
            <section id='section' className="h-100">
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                    <Form id="form" className="needs-validation" noValidate validated="" autoComplete="off">
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="uname">Username</label>
                                            <Form.Control id="uname" type="text" className="form-control" placeholder="Username" name="uname" pattern="^[a-zA-Z0-9]+$" required autoFocus></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Username is required and should contain alphanumeric characters only!
                                            </Form.Control.Feedback>

                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="nick">Nickname</label>
                                            <Form.Control id="nick" type="text" className="form-control" placeholder="Nickname" name="nick" pattern="^[a-zA-Z0-9]+$" required autoFocus></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Nickname is required and should contain alphanumeric characters only!
                                            </Form.Control.Feedback>

                                        </div>
                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>
                                            </div>
                                            <Form.Control id="password" type="password" className="form-control" placeholder="Password" name="password" pattern="^[a-zA-Z0-9]+$" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Password is required and should contain alphanumeric characters only!
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password2">Password confirmation</label>
                                            </div>
                                            <Form.Control id="password2" type="password" className="form-control" placeholder="Confirm password" name="password" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Password confirmation is required!
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="img">Profile picture</label>
                                            </div>
                                            <Form.Control id="img" type="file" accept='image/*' className="form-control" placeholder="Select image" name="img" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Profile picture is required!
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <button type="submit" className="btn btn-primary ms-auto" >
                                                Register
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Already registered? <Link to='/'>Click here</Link> to login.
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
export default Register;