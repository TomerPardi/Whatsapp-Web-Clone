import React from 'react';
import image1 from "./download.jpg"

const Profile = () => {
    return (
        <div className="profile">
            <img src={image1}></img>
            <h1 className="font-name">Tomer Pardilov</h1>
        </div>
    );
}

export default Profile;
