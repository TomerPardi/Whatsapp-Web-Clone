import React from "react";
import { useContext } from "react";
import AppContext from "../../AppContext";
import defaultImage from "./default.jpg";

const Profile = (props) => {
  
  const userData = props.userData;
  // TODO: do we really need to get photo from server?

  return (
    <>
      <div className='profile d-flex justify-content-start'>
      {/* TODO: do we really need to get the photo from server? */}
        <img
          src="default.jpg"
          alt={defaultImage}
        ></img>
        <h1 className='font-name'> {userData}</h1>
      </div>
    </>
  );
};

export default Profile;
