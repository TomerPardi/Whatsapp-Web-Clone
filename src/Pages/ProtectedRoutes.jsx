import React from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../AppContext";

function IsAuth() {
  const context = React.useContext(AppContext);
  if (context.currentUser !== "none") {
    return true;
  }
  return false;
}

export const ProtectedRoutes = () => {
  return IsAuth() ? <Outlet user={context.currentUser} /> : <Navigate to='/' />;
};
