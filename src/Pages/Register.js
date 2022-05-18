import { Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { render } from "@testing-library/react";
import RegisterAlert from "./RegisterAlert";
import axios from "axios"

function Register() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Default Error!");

  const handleClose = () => setShow(false);

  // ********************************************************
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [password2, setPassword2] = useState("");
  // const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    const form = document.getElementById("form");
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    if (password.value != password2.value) {
      setErrorMessage("Passwords are not matching!");
      setShow(true);
      return;
    }
    try {
      const result = await axios.post("https://localhost:7066/api/Register",
        { username: username, password: password },
        { withCredentials: true });
      //let resJson = await res.json();
      if (result.status === 200) {
        setUsername("");
        setPassword("");
        setNickname("");
        setPassword2("");
        // setImage("");
        setMessage("User registerd successfully");
        handleSuccess();
      } else {
        // @TODO: diffrentiate between erros??????
        setMessage("Some error occured");
        // @TODO: change MessageError!!!!!
        setShow(true);

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  // ******************************************************

  function handleSuccess() {
    render(
      <div>
        <RegisterAlert show={true} navigate={navigate} />
      </div>
    );
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div
          className='alert alert-danger'
          role='alert'
          style={{ marginBottom: "0rem" }}
        >
          {errorMessage}
        </div>
      </Modal>
      <img id='myimg' src='plane.png' alt=''></img>
      <section id='section' className='h-100'>
        <div className='container h-100'>
          <div className='row justify-content-sm-center h-100'>
            <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
              <div className='card shadow-lg'>
                <div className='card-body p-5'>
                  <h1 className='fs-4 card-title fw-bold mb-4'>Register</h1>
                  <Form
                    id='form'
                    className='needs-validation'
                    noValidate
                    autoComplete='off'
                    onSubmit={handleSubmit}
                  >
                    <div className='mb-3'>
                      <label className='mb-2 text-muted' htmlFor='uname'>
                        Username
                      </label>
                      <Form.Control
                        id='uname'
                        type='text'
                        value={username}
                        className='form-control'
                        placeholder='Username'
                        name='uname'
                        pattern='^[a-zA-Z0-9]+$'
                        required
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                      ></Form.Control>
                      <Form.Control.Feedback type='invalid'>
                        Username is required and should contain alphanumeric
                        characters only!
                      </Form.Control.Feedback>
                    </div>

                    <div className='mb-3'>
                      <div className='mb-2 w-100'>
                        <label className='text-muted' htmlFor='password'>
                          Password
                        </label>
                      </div>
                      <Form.Control
                        id='password'
                        type='password'
                        value={password}
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        pattern='^[a-zA-Z0-9]+$'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                      <Form.Control.Feedback type='invalid'>
                        Password is required and should contain alphanumeric
                        characters only!
                      </Form.Control.Feedback>
                    </div>
                    <div className='mb-3'>
                      <div className='mb-2 w-100'>
                        <label className='text-muted' htmlFor='password2'>
                          Password confirmation
                        </label>
                      </div>
                      <Form.Control
                        id='password2'
                        type='password'
                        value={password2}
                        className='form-control'
                        placeholder='Confirm password'
                        name='password'
                        required
                        onChange={(e) => setPassword2(e.target.value)}
                      ></Form.Control>
                      <Form.Control.Feedback type='invalid'>
                        Password confirmation is required!
                      </Form.Control.Feedback>
                    </div>
                    {/* <div className='mb-3'>
                      <div className='mb-2 w-100'>
                        <label className='text-muted' htmlFor='img'>
                          Profile picture
                        </label>
                      </div>
                      <Form.Control
                        id='img'
                        type='file'
                        value={image}
                        accept='image/*'
                        className='form-control'
                        placeholder='Select image'
                        name='img'
                        required
                        onChange={(e) => setImage(e.target.value)}
                      ></Form.Control> 
                      <Form.Control.Feedback type='invalid'>
                        Profile picture is required!
                      </Form.Control.Feedback>
                    </div> */}

                    <div className='d-flex align-items-center'>
                      <button type='submit' className='btn btn-primary ms-auto'>
                        Register
                      </button>
                    </div>
                  </Form>
                </div>
                <div className='card-footer py-3 border-0'>
                  <div className='text-center'>
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
