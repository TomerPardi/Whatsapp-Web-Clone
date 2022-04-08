import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AppContext from '../AppContext';
import Login from './Login';

function isAuth(){
    const context = React.useContext(AppContext)
    if(context.currentUser!='none'){
        return true;
    }
    return false;
}

export const ProtectedRoutes = () => {
    return isAuth()? <Outlet user={localStorage.getItem("user")}/> :<Navigate to="/"/>
}
