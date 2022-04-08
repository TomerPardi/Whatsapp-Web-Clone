import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MessageInput from "./MessageInput";
import ChatList from "./ChatList";
import Chat from "./Chat";
import { useEffect } from "react";
import ChatList_v2 from "./ChatList_v2";
import Homepage from "./homepage/Homepage";
import AppContext from "../AppContext";


export default function Home() {
    useEffect(() => {
        //window.addEventListener('beforeunload', alertUser)
        window.addEventListener('unload', handleTabClosing)
        return () => {
            //window.removeEventListener('beforeunload', alertUser)
            window.removeEventListener('unload', handleTabClosing)
        }
    })

    const handleTabClosing = () => {
        AppContext.currentUser = 'none';
        localStorage.removeItem("user");

    }

    return (
        <div>
            <Homepage/>
        </div>
        
    )
}