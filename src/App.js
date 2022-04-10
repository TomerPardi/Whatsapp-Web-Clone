import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NotFound from './Pages/NotFound';
import Homepage from './Pages/homepage/Homepage';
import { ProtectedRoutes } from './Pages/ProtectedRoutes';
import { AppContextProvider } from './AppContext';




export const App = () => {
  const sharedContext = require("./sharedContext.json");
  
  return (
    <AppContextProvider value={sharedContext}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Homepage />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}



