import React, { useEffect, useState } from 'react'
import MessageInput from '../MessageInput'
import Chathead from './ChatHead'
import Chatwindow from './ChatWindow'
import Contactslist from './ContactsList'
import "./Homepage.css"
import Profile from './Profile'
import AppContext from '../../AppContext'

const handleTabClosing = () => {
    AppContext.currentUser = 'none';
}



export default function Homepage(props) {
    let context = React.useContext(AppContext)
    const [user, setUser] = useState(context.currentUser)
    //TODO: apply change in array to context
    const [messages, setMessages] = useState(context.userData[user].contacts[context.ActiveContact])
    // a state change to trigger a re-render of the page
    const [changed, setChanged] = useState(false)
    const [active, setActive] = useState(context.ActiveContact)
    useEffect(() => {
        setChanged(false);
        setUser(context.currentUser)
        setMessages(context.userData[user].contacts[context.ActiveContact])
        window.addEventListener('unload', handleTabClosing)
        return () => {
            window.removeEventListener('unload', handleTabClosing)
        }
    });
    function conditionalRight() {
        console.log(active)
        if (active === 'none') {
           return(
               <div className='d-flex justify-content-center' style={{height:'100%',background:'#99eda1'}}>
                   <div>
                    im a placeholder
                   </div>
               </div>
           )
        }
        else{
            return (
                <>
                    <Chathead ActiveContact={active} />
                    <Chatwindow messages={messages} setter={setMessages} ActiveContact={active} />
                    <MessageInput messages={messages} setter={setChanged} />
                </>
            )
        }
    
    };

    return (
        <>
            <div className="wrap">
                <section className="left">
                    {/* nickname and user's image will be here */}
                    <Profile />
                    {/* contacts list and search bar for contacts will be here */}
                    <Contactslist setter={setChanged} setActive={setActive} />
                </section>

                <section className="right">
                    {
                         conditionalRight()
                    }
                   
                </section>
            </div>
        </>

    )
}
