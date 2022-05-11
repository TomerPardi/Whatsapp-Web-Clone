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

// const handleTabClosing = () => {
//   AppContext.currentUser = "none";
// };

// compare 2 arrays of messages by the value of time in the last of them
// TODO: convert to the api form
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
  const [user, setUser] = useState("");
  // change to fetch from /api/contacts/alice/messages
  // const [messages, setMessages] = useState(
  //   context.userData[user].contacts[context.activeContact] 
  // );
  const [messages, setMessages] = useState([{}])
  const [contacts,setContacts] = useState([{}])

  // a state change to trigger a re-render of the page
  const [changed, setChanged] = useState(false);
  const [active, setActive] = useState(false); //whether we have chosen a contact

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  // function to order the contacts in the contact list and apply the value to the context
  function orderContacts() {
   // contacts unordered
    let ordered = Object.values(contacts).sort(compareContacts)
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
    //orderContacts();
    // setUser(context.currentUser);
    let data = await fetch(`url_of_server/api/contacts/${active}/messages/`);
    setMessages(data);
    //setMessages(context.userData[user].contacts[context.activeContact]);

/*     // window.addEventListener("unload", handleTabClosing);
    // return () => {
    //   window.removeEventListener("unload", handleTabClosing);
    // }; */
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
      let data = await fetch(`url_of_server/api/contacts/${active}/messages/`);
      setMessages(data);
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

  setContacts(await fetch("url_of_server/api/contacts/")) // we receive json from server via api
  //orderContacts(); // TODO: order by lastdate from api?
  setMessages(data); // it should be a list.
  // User = json of {userName:"",userData:{"photo": "./default.jpg","nickname": ""}}
  setUser(await fetch("url_of_server/api/self")) //TODO: create a controller in the api to return data about self by token \ cookie


  return (
    <>
      <OutsideAlerter setter={setActive}>
        <section className='left'>
          {/* nickname and user's image will be here */}
          <Profile userData = {user.userData}/>
          {/* contacts list and search bar for contacts will be here */}
          <Contactslist setter={setChanged} setActive={setActive} />
        </section>

        <section className='right'>{conditionalRight()}</section>
      </OutsideAlerter>
    </>
  );
}
