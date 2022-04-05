import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MessageInput from "./MessageInput";
import ChatList from "./ChatList";
import Chat from "./Chat";
import { useEffect } from "react";

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
        localStorage.removeItem("user");
    }

    return (
        <section className="row w-100 g-0">
            <div className="col-4">
                <ChatList />
            </div>
            <div className="col">
                <Chat />
            </div>
        </section>
    )
}