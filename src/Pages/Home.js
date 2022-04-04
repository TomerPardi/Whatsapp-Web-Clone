import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageInput from "./MessageInput";
import ChatList from "./ChatList";
import Chat from "./Chat";

export default function Home() {
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