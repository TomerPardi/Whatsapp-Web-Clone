import React from 'react';
import { Button } from 'react-bootstrap';



const Utilsbuttons = () => {
    return (
        <div className="wrap-search d-flex justify-content-around">
            {/* <i className="fa fa-search fa" aria-hidden="true"></i>
                <input type="text" className="input-search" placeholder="Search contacts"></input> */}

            <Button className='utilsBtn' variant='light' onClick={() => {
                localStorage.removeItem("user");
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
