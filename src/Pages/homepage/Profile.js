import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1089577/user.jpg"></img>
            <div className="icons">
                <i className="fa fa-commenting fa-lg" aria-hidden="true"></i>
                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Profile;
