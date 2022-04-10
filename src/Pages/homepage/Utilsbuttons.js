import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import AppContext from '../../AppContext';




const Utilsbuttons = (props) => {
    const sharedContext = useContext(AppContext)


    return (
        <div className="wrap-search d-flex justify-content-around">

            <Button className='utilsBtn' variant='light' onClick={() => {
                //console.log(sharedContext.userData.tomer.contacts)
                sharedContext.currentUser = 'none'
                // localStorage.removeItem("user");
                window.location.replace("/");
            }}>
                <i class="bi bi-box-arrow-left"></i>&nbsp;
                Logout

            </Button>
            <Button className='utilsBtn' variant='light' onClick={() => {
                sharedContext.userData[sharedContext.currentUser].contacts["benny"] = [];
                console.log(sharedContext.userData[sharedContext.currentUser])
            }}>

                <i class="bi bi-person-plus"></i>&nbsp;

                Add Contact
            </Button>
        </div>

    );
}

export default Utilsbuttons;
