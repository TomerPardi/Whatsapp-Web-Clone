import React from 'react';
import Contact from './Contact';
import utilsButtons from './Utilsbuttons';

const Contactslist = () => {
    return (
        <>


            <div className="contact-list">
                <div className="list-group">
                    <Contact contactName={"Tomer Pardilov"} />
                    <Contact contactName={"Daniel Bronfman"} />
                    <Contact contactName={"Valeria"} />
                    <Contact contactName={"Elinoy"} />
                    <Contact contactName={"Yafim"} />
                    <Contact contactName={"Diana"} />

                </div>
            </div>
        </>

    );
}

export default Contactslist;
