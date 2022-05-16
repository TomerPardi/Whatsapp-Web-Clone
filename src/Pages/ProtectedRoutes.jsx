import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";



async function IsAuth() {
  const sharedContext = useContext(AppContext);
  console.log("blaaaaaaaa" + sharedContext.currentUser)
  // TODO: check if i can connect to server without "http://blabla"
  let res = await fetch("https://localhost:7066/Self")
  console.log("status" + res.status)
  if (res.status === 200) {
    console.log("here2")
    sharedContext.currentUser = res;
    return true;
  }
  return false;
}

export const ProtectedRoutes = () => {
  let isAuth;
  IsAuth().then(value => isAuth = value);
  console.log("is Auth " + isAuth)

  if (isAuth) {
    console.log("here1")
    return <Outlet />;
  }
  console.log("here3")
  return <Navigate to='/' />;
};
