import React from 'react'
import "./Homepage.css"

export default function ChatList() {
    return (
        <>
            <div className="wrap">
                <section className="left">
                    <div className="profile">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1089577/user.jpg"></img>
                            <div className="icons">
                                <i className="fa fa-commenting fa-lg" aria-hidden="true"></i>
                                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
                            </div>
                    </div>
                    <div className="wrap-search">
                        <div className="search">
                            <i className="fa fa-search fa" aria-hidden="true"></i>
                            <input type="text" className="input-search" placeholder="Search contacts"></input>
                        </div>
                    </div>
                    <div className="contact-list">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action">
                                first contact
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">second contact</a>
                            <a href="#" className="list-group-item list-group-item-action">third contact</a>
                            <a href="#" className="list-group-item list-group-item-action">fourth contact</a>
                            <a href="#" className="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">fifth
                                contact</a>
                            <a href="#" className="list-group-item list-group-item-action">
                                first contact
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">second contact</a>
                            <a href="#" className="list-group-item list-group-item-action">third contact</a>
                            <a href="#" className="list-group-item list-group-item-action">fourth contact</a>
                            <a href="#" className="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">fifth
                                contact</a>
                            <a href="#" className="list-group-item list-group-item-action">
                                first contact
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">second contact</a>
                            <a href="#" className="list-group-item list-group-item-action">third contact</a>
                            <a href="#" className="list-group-item list-group-item-action">fourth contact</a>
                            <a href="#" className="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">fifth
                                contact</a>
                        </div>
                    </div>
                </section>

                <section className="right">
                    <div className="chat-head">
                        <img alt="profilepicture"></img>
                            <div className="chat-name">
                                <h1 className="font-name"></h1>
                                <p className="font-online"></p>
                            </div>

                    </div>
                    <div className="wrap-chat">
                        <div className="chat"></div>
                        <div className="information"></div>
                    </div>
                    <div className="wrap-message">
                        <i className="fa fa-smile-o fa-lg" aria-hidden="true"></i>
                        <div className="message">
                            <input type="text" className="input-message" placeholder="Write a message here"></input>
                        </div>
                        <i className="fa fa-microphone fa-lg" aria-hidden="true"></i>
                    </div>
                </section>
            </div>

        </>
    )
}
