import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import AppContext from '../../AppContext';
import defaultImage from './default.jpg';
import Utilsbuttons from './Utilsbuttons';



const Profile = () => {
    const userData = useContext(AppContext).userData
    const user = useContext(AppContext).currentUser
    const photo = userData[user].photo;
    console.log(photo)


    return (
        <>
            <div className="profile d-flex justify-content-start">
            <img src={photo.includes('blob')? photo : require(`${photo}`)} alt={defaultImage}></img>
            <h1 className="font-name"> {userData[user].nickname}</h1>

        </div>
        <Utilsbuttons />
        </>

    );
}

export default Profile;
