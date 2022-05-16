import React from "react";
import Contact from "./Contact";
import Utilsbuttons from "./Utilsbuttons";
import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { ListGroup } from "react-bootstrap";

// the props are setChanges - used to re-render homepage
// and setActive to set current active user i talk with
const Contactslist = (props) => {
  const sharedContext = useContext(AppContext);
  const [currUser, setCurrUser] = useState(sharedContext.currentUser);

  // we are fetching contacts list in Homepage
  // {id, name, server, last, lastdate}

  return (
    <>
      <Utilsbuttons setter={props.setter} />
      <div className='contact-list'>
        <div className='list-group'>
          <ListGroup>
            {Object.keys(props.contactsList).map(
              // each item is JSON object - {id, name, server, last, lastdate}
              (item, i) => (
                <ListGroup.Item
                  active
                  style={{ display: "contents" }}
                  onClick={() => {
                    // console.log(item);
                    // @ts-ignore
                    props.setActive(item.name);
                    sharedContext.activeContact = item.name;
                    props.setter(true);
                  }}
                >
                  <Contact
                    key={i}
                    contactName={item.name}
                    // TODO: change to default photo???
                    photo="default.jpg"
                    
                    lastMessage={item.last}
                    lastMessageTime={item.lastdate}

                    // TODO: the API doesnt support who sent last message
                    // isSelf={
                    //   sharedContext.userData[currUser].contacts[item].length ==
                    //   0
                    //     ? false
                    //     : sharedContext.userData[currUser].contacts[item].at(-1)
                    //         .isSelf
                    // }
                  />
                </ListGroup.Item>
              )
            )}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Contactslist;
