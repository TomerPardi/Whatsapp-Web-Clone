import React, { useEffect, useState } from 'react'
import MessageInput from '../MessageInput'
import Chathead from './ChatHead'
import Chatwindow from './ChatWindow'
import Contactslist from './ContactsList'
import "./Homepage.css"
import Profile from './Profile'
import AppContext from '../../AppContext'
import planeGIF from './giphy.gif'

const handleTabClosing = () => {
    AppContext.currentUser = 'none';
}

// compare 2 arrays of messages by the value of time in the last of them
function compareContacts(a, b) {
    // get the last message in the list of messages, and gets its time field.
    let last1 = a[a.length - 1].time
    console.log(last1)
    let last2 = b[b.length - 1].time
    if (last1 < last2) return 1;
    if (last1 > last2) return -1;
    else return 0;
}



export default function Homepage(props) {
    let context = React.useContext(AppContext)
    const [user, setUser] = useState(context.currentUser)
    const [messages, setMessages] = useState(context.userData[user].contacts[context.ActiveContact])
    // a state change to trigger a re-render of the page
    const [changed, setChanged] = useState(false)
    const [active, setActive] = useState(context.ActiveContact)

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
    
    // function to order the contacts in the contact list and apply the value to the context
    function orderContacts() {
        let unordered = context.userData[user].contacts // contacts unordered
        let ordered = Object.values(unordered).sort(compareContacts).reduce(
            // obj is the object reduce works on - reduce iterates over the sorted array of values (the values are contacts)
            // each time reduce adds a contact to the obj, using the value from the previous unsorted array.
            (obj, value) => {
                // get the key for the value in new order from unordered object
                let key = getKeyByValue(unordered,value)
                // set the value(array of messages) to be the value from the unsorted array, for the key, the key being the contacts name
                obj[key] = value;
                return obj;
            }, 
            {} //initial value passed to reduce - empty object
        )
        // save the new ordered by last message time contact list to context
        context.userData[user].contacts = ordered;
    }

    useEffect(() => {
        setChanged(false);
        orderContacts();
        setUser(context.currentUser)
        setMessages(context.userData[user].contacts[context.ActiveContact])
        window.addEventListener('unload', handleTabClosing)
        return () => {
            window.removeEventListener('unload', handleTabClosing)
        }
    });
    function conditionalRight() {
        if (active === 'none') {
            return (
                <div style={{ height: '100%', background: '#99eda1' }}>
                    <div className='d-flex align-items-center flex-column'>
                        <img src={planeGIF}></img>
                        <div className='fs-5'><em>A new way to communicate with your friends!</em></div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <Chathead ActiveContact={active} />
                    <Chatwindow messages={messages} setter={setMessages} ActiveContact={active} />
                    <MessageInput messages={messages} setter={setChanged} />
                </>
            )
        }

    };

    orderContacts();
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
