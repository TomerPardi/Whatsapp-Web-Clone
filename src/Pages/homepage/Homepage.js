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

export default async function Homepage(props) {
  let context = React.useContext(AppContext);
  console.log(context.currentUser)
  console.log(context.activeContact)
  const [user, setUser] = useState(context.currentUser);
  // change to fetch from /api/contacts/alice/messages
  // const [messages, setMessages] = useState(
  //   context.userData[user].contacts[context.activeContact]
  // );
  const [messages, setMessages] = useState([{}]);
  const [contacts, setContacts] = useState([{}]);

  // a state change to trigger a re-render of the page
  const [changed, setChanged] = useState(false);
  const [active, setActive] = useState(context.activeContact); //whether we have chosen a contact
  const [activeInfo, setActiveInfo] = useState("none");

  // TODO: discuss again if this function is really needed
  useEffect(() => {
    async function fetchData() {
      setChanged(false);
      if (active !== "none") {
        let data = await fetch(
          `https://localhost:7066/api/contacts/${active}/messages/`
        );

        setMessages(data);
      }
    }
    fetchData();
  }, []);

  async function conditionalRight() {
    if (active === "none") {
      return (
        <div
          style={{ height: "100%", background: "#99eda1" }}
          className='d-flex align-items-center flex-column'
        >
          // TODO: discuss from where do we need to get the images
          <img
            style={{ height: "75%", maxWidth: "100%" }}
            src={planeGIF}
            alt='img'
          ></img>
          <div className='fs-5'>
            <em>A new way to communicate with your friends!</em>
          </div>
        </div>
      );
    } else {
      // the user clicked on contact to talk with, active changes to this contact
      // TODO: are we getting data as JSON or as a list?
      // list of JSON objects - {id, content, created, sent}
      setMessages(
        await fetch(`https://localhost:7066/api/contacts/${active}/messages`)
      );
      // we are getting it as JSON - {id, name, server, last, lastdate }
      setActiveInfo(
        await fetch(`https://localhost:7066/api/contacts/${active}`)
      );

      return (
        <>
          <Chathead activeContact={activeInfo} />
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
  
  // we receive json from server via api
  setContacts(await fetch("https://localhost:7066/api/contacts"));
  //orderContacts(); // TODO: order by lastdate from api?

  return (
    <>
      <OutsideAlerter setter={setActive}>
        <section className='left'>
          {/* nickname and user's image will be here */}
          <Profile userData={user} />
          {/* contacts list and search bar for contacts will be here */}
          <Contactslist setter={setChanged} setActive={setActive} contactsList={contacts} />
        </section>

        <section className='right'>{conditionalRight()}</section>
      </OutsideAlerter>
    </>
  );
}
