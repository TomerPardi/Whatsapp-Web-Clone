import React, { useEffect, useState } from "react";
import MessageInput from "../MessageInput";
import Chathead from "./ChatHead";
import Chatwindow from "./ChatWindow";
import Contactslist from "./ContactsList";
import "./Homepage.css";
import Profile from "./Profile";
import AppContext from "../../AppContext";
import planeGIF from "./static-airplane.png";
import OutsideAlerter from "../useOutside";

const handleTabClosing = () => {
  AppContext.currentUser = "none";
};

// compare 2 arrays of messages by the value of time in the last of them
function compareContacts(a, b) {
  // get the last message in the list of messages, and gets its time field.
  if (a.length == 0 && b.length != 0) return 1;
  if (a.length != 0 && b.length == 0) return -1;
  if (a.length == 0 && b.length == 0) return 0;
  let last1 = a[a.length - 1].time;
  let last2 = b[b.length - 1].time;
  if (last1 < last2) return 1;
  if (last1 > last2) return -1;
  else return 0;
}

export default function Homepage(props) {
  let context = React.useContext(AppContext);
  const [user, setUser] = useState(context.currentUser);
  // change to fetch from /api/contacts/alice/messages
  // const [messages, setMessages] = useState(
  //   context.userData[user].contacts[context.activeContact] 
  // );
  const [messages, setMessages] = useState([{}])

  // a state change to trigger a re-render of the page
  const [changed, setChanged] = useState(false);
  const [active, setActive] = useState(context.activeContact); //so maybe the context is needed?

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  // function to order the contacts in the contact list and apply the value to the context
  function orderContacts() {
    let unordered = context.userData[user].contacts; // contacts unordered
    let ordered = Object.values(unordered)
      .sort(compareContacts)
      .reduce(
        // obj is the object reduce works on - reduce iterates over the sorted array of values (the values are contacts)
        // each time reduce adds a contact to the obj, using the value from the previous unsorted array.
        (obj, value) => {
          // get the key for the value in new order from unordered object
          let key = getKeyByValue(unordered, value);
          // set the value(array of messages) to be the value from the unsorted array, for the key, the key being the contacts name
          obj[key] = value;
          return obj;
        },
        {} //initial value passed to reduce - empty object
      );
    // save the new ordered by last message time contact list to context
    context.userData[user].contacts = ordered;
  }

  useEffect(() => {
    setChanged(false);
    orderContacts();
    setUser(context.currentUser);
    setMessages(context.userData[user].contacts[context.activeContact]);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  function conditionalRight() {
    if (active === "none") {
      return (
        <div
          style={{ height: "100%", background: "#99eda1" }}
          className='d-flex align-items-center flex-column'
        >
          <img style={{ height: "75%", maxWidth:"100%" }} src={planeGIF} alt='img'></img>
          <div className='fs-5'>
            <em>A new way to communicate with your friends!</em>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Chathead activeContact={active} />
          <Chatwindow
            messages={messages}
            setter={setMessages}
            activeContact={active}
          />
          <MessageInput messages={messages} setter={setChanged} />
        </>
      );
    }
  }

  orderContacts(); // order by lastdate from api?
  let data = await fetch("url_ofserver/api/contacts/<contacts name goes here>/messages/") //maybe add function in server API to return ALL messages (for each loop) 
  setMessages(data.json); // it should be a list..
  return (
    <>
      <OutsideAlerter setter={setActive}>
        <section className='left'>
          {/* nickname and user's image will be here */}
          <Profile />
          {/* contacts list and search bar for contacts will be here */}
          <Contactslist setter={setChanged} setActive={setActive} />
        </section>

        <section className='right'>{conditionalRight()}</section>
      </OutsideAlerter>
    </>
  );
}
