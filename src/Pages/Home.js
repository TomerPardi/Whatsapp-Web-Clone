import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
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