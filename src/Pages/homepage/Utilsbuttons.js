import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import AppContext from '../../AppContext';




const Utilsbuttons = () => {
    const sharedContext = useContext(AppContext)

    return (
        <div className="wrap-search d-flex justify-content-around">

            <Button className='utilsBtn' variant='light' onClick={() => {
                sharedContext.currentUser = 'none'
                // localStorage.removeItem("user");
                window.location.replace("/");
            }}>
                <i class="bi bi-box-arrow-left"></i>&nbsp;
                Logout


            </Button>
            <Button className='utilsBtn' variant='light' onClick={() => {
                localStorage.removeItem("user");
                window.location.replace("/");
            }}>

                <i class="bi bi-person-plus"></i>&nbsp;

                Add Contact
            </Button>
        </div>

    );
}

export default Utilsbuttons;
