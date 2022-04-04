import React, { useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Chats from './Pages/Chats';



function App() {

  return (

    <BrowserRouter>
    <Routes>
    <Route path="chats" element={<Chats/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
