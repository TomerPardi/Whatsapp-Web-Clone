import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Homepage from "./homepage/Homepage";
import AppContext from "../AppContext";

export default function Home() {
  useEffect(() => {
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("unload", handleTabClosing);
    };
  });

  const handleTabClosing = () => {
    AppContext.currentUser = "none";
  };

  return (
    <div>
      <Homepage />
    </div>
  );
}
