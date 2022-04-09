import React, { useEffect, useState } from 'react'
import MessageInput from '../MessageInput'
import Chathead from './ChatHead'
import Chatwindow from './ChatWindow'
import Contactslist from './ContactsList'
import "./Homepage.css"
import Profile from './Profile'
import AppContext from '../../AppContext'



export default function Homepage(props) {
    let context = React.useContext(AppContext)
    const user = context.currentUser
    const [messages,setMessages] = useState(context.userData[user].contacts.daniel)
    const [changed,setChanged] = useState(false)
    useEffect(() => {    setChanged(false);  });

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
                    {/* the Messages will be displayed here */}
                    <Chatwindow messages={messages} setter={setMessages} trigger={{}}/>
                    {/* input for new messages will be here */}
                    <MessageInput messages={messages} setter={setChanged}/>
                </section>
            </div>
        </>
        
    )
}
