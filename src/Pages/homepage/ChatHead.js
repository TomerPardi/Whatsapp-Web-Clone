import React, { useContext } from "react";
import AppContext from "../../AppContext";
import defaultImage from "./default.jpg";

const Chathead = (props) => {
  const context = useContext(AppContext);
  const contactData = context.userData;
  const photo = contactData[props.activeContact].photo;
  if (props.activeContact === "none") {
    return <div>placeholder</div>;
  } else {
    return (
      <div className='chat-head'>
        <img
          src={photo.includes("blob") ? photo : require(`${photo}`)}
          alt={defaultImage}
        ></img>
        <div className='chat-name'>
          <h1 className='font-name'>
            {contactData[props.activeContact].nickname}
          </h1>
          {/* <p className="font-online"></p> */}
        </div>
      </div>
    );
  }
};

export default Chathead;
