import React, { Component,useState } from 'react';
import { Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";



export const App= () => {
  const [auth, setAuth] = useState(false);
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login handleAuth={(newValue)=>setAuth(newValue)} />}/>
    <Route path="register" element={<Register/>}/>
    <Route exact path="home" element={auth? <Home/>:<Register/>} />
    </Routes>
    </BrowserRouter>
  );
}



