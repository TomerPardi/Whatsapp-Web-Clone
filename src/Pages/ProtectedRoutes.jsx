import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";
import context from "react-bootstrap/esm/AccordionContext";



async function IsAuth() {
  const sharedContext = useContext(AppContext);
  // TODO: check if i can connect to server without "http://blabla"
  let res = await fetch(`https://localhost:7066/Self`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET",
        credentials: "include",
      });
    
  //let res = await fetch("https://localhost:7066/Self")
  var parsed;
  res.text().then(x=>sharedContext.currentUser=x);
  console.log(res.status);
  if (res.status === 200) {
    console.log(sharedContext.currentUser);
    return true;
  }
  return false;
}

export const ProtectedRoutes = () => {
  let isAuth;
  IsAuth().then(value => isAuth = value);

  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to='/' />;
};
