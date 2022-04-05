import React, { Component, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NotFound from './Pages/NotFound';
import { ProtectedRoutes } from './Pages/ProtectedRoutes';



export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}



