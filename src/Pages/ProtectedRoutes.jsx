import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';

function isAuth(){
    if(localStorage.getItem("user")){
        return true;
    }
    return false;
}

export const ProtectedRoutes = () => {
    return isAuth()? <Outlet user={localStorage.getItem("user")}/> :<Navigate to="/"/>
}
