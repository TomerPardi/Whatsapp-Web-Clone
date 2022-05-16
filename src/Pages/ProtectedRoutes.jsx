import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";

import { useContext } from "react";
import AppContext from "../AppContext";

async function IsAuth() {
  const sharedContext = React.useContext(AppContext);
  // TODO: check if i can connect to server without "http://blabla"
  let res = await fetch(`http://localhost:7066/Self`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
  });

  //let res = await fetch("https://localhost:7066/Self")
  let x = await res.text();
  console.log("x is " + x);
  sharedContext.currentUser = x;
  
  console.log(res.status);
  if (res.status === 200) {
    console.log("True");
    return true;
  }
  return false;
}

export const ProtectedRoutes = () => {
  return IsAuth()
    .then((value) => {
      console.log("value is " + value);
      if (value) {
        console.log("Outlet is auth true");
        return <Outlet />;
      } else return <Navigate to='/' />;
    });
};
