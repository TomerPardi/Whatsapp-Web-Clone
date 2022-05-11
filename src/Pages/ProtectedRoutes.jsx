import React from "react";
import { Navigate, Outlet } from "react-router-dom";

async function IsAuth() {

  // Assume that the server will have a dedicated controller to return
  // whether the user is authorized (JWT \ session cookie)
  // for example localhost:3000/api/auth -> true of false
  return await fetch("url_of_server");
}

export const ProtectedRoutes = () => {
  return IsAuth() ? <Outlet /> : <Navigate to='/' />;
};
