import React from 'react';
import Contact from './Contact';
import Utilsbuttons from './Utilsbuttons';
import { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import { ListGroup, Badge } from 'react-bootstrap';


const Contactslist = (props) => {
    const sharedContext = useContext(AppContext)
    const [currUser, setcurrUser] = useState(sharedContext.currentUser);

    return (
        <>
            <Utilsbuttons setter={props.setter} />
            <div className="contact-list">
                <div className="list-group">
                    <ListGroup >
                        {Object.keys(sharedContext.userData[currUser].contacts).map((item, i) => (
                            <ListGroup.Item active style={{ display: 'contents' }}
                                onClick={() => {
                                    // console.log(item);
                                    props.setActive(item);
                                    sharedContext.activeContact = item;
                                    props.setter(true);
                                }}>
                                <Contact key={i} contactName={item} photo={sharedContext.userData[item].photo}
                                    lastMessage={sharedContext.userData[currUser].contacts[item].at(-1)}
                                    isSelf={
                                        sharedContext.userData[currUser].contacts[item].length==0?
                                        false:
                                        sharedContext.userData[currUser].contacts[item].at(-1).isSelf
                                    }
                                />

                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    {/* <Contact contactName={"Tomer Pardilov"} />
                    <Contact contactName={"Daniel Bronfman"} />
                    <Contact contactName={"Valeria"} />
                    <Contact contactName={"Elinoy"} />
                    <Contact contactName={"Yafim"} />
                    <Contact contactName={"Diana"} /> */}

                </div>
            </div>
        </>

    );
}

export default Contactslist;
