import React from 'react';
import Contact from './Contact';
import Utilsbuttons from './Utilsbuttons';
import { useContext, useState } from 'react';
import AppContext from '../../AppContext';


const Contactslist = (props) => {
    const sharedContext = useContext(AppContext)
    const [currUser, setcurrUser] = useState(sharedContext.currentUser);

    return (
        <>
            <Utilsbuttons setter={props.setter}/>
            <div className="contact-list">
                <div className="list-group">
                    {Object.keys(sharedContext.userData[currUser].contacts).map((item, i) => (
                        <Contact key={i} contactName={item} />
                    ))}
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
