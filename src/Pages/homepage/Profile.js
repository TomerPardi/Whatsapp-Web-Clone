import React from 'react';
import { Button } from 'react-bootstrap';
import image1 from "./download.jpg"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import AppContext from '../../AppContext';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

const Profile = () => {
    const userData = useContext(AppContext).userData
    const user = useContext(AppContext).currentUser
    const photo = userData[user].photo
    return (
        <div className="profile d-flex justify-content-between">
            <img src={require(`${photo}`)}>
            </img>
            <h1 className="font-name float-left">{userData[user].nickname}</h1>
            <Button className='floatRight' variant='light' onClick={() => {
                localStorage.removeItem("user");
                window.location.replace("/");
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </Button>
        </div>
    );
}

export default Profile;
