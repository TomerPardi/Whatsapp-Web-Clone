import React from 'react';

const Contactsearch = () => {
    return (
        <div className="wrap-search">
            <div className="search">
                <i className="fa fa-search fa" aria-hidden="true"></i>
                <input type="text" className="input-search" placeholder="Search contacts"></input>
            </div>
        </div>
    );
}

export default Contactsearch;
