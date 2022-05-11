import React from "react";
import { useContext } from "react";
import AppContext from "../../AppContext";
import defaultImage from "./default.jpg";

const Profile = (props) => {
  const userData = props.userData;
  const photo = userData.photo;

  return (
    <>
      <div className='profile d-flex justify-content-start'>
        <img
          src={photo.includes("blob") ? photo : require(`${photo}`)}
          alt={defaultImage}
        ></img>
        <h1 className='font-name'> {userData.nickname}</h1>
      </div>
    </>
  );
};

export default Profile;
