import React from 'react'
import Chathead from './ChatHead'
import Chatwindow from './ChatWindow'
import Contactslist from './ContactsList'
import "./Homepage.css"
import Msginput from './MsgInput'
import Profile from './Profile'

export default function Homepage() {
    return (
        <>
            <div className="wrap">
                <section className="left">
                    {/* nickname and user's image will be here */}
                    <Profile />
                    {/* contacts list and search bar for contacts will be here */}
                    <Contactslist />
                </section>

                <section className="right">
                    {/* Current contact's info we talking with, will be here
                    like profile image, name, etc.*/}
                    <Chathead />
                    {/* the ,essages will be displayed here */}
                    <Chatwindow />
                    {/* input for new messages will be here */}
                    <Msginput />
                </section>
            </div>

        </>
    )
}
