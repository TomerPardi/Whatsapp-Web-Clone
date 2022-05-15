import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../AppContext";



async function IsAuth() {
  const sharedContext = useContext(AppContext);
  // TODO: check if i can connect to server without "http://blabla"
  let res = await fetch("https://localhost:7066/Self")
  if (res.status === 200) {
    sharedContext.currentUser = res;
    return true;
  }
  return false;
}

export const ProtectedRoutes = () => {
  return IsAuth() ? <Outlet /> : <Navigate to='/' />;
};
