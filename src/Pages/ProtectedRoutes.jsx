import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';

function isAuth(){
    if(localStorage.getItem("auth")==="true"){
        return true;
    }
    return false;
}

export const ProtectedRoutes = () => {
    return isAuth()? <Outlet/> :<Login/>
}
