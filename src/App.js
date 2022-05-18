import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Homepage from "./Pages/homepage/Homepage";
import { ProtectedRoutes } from "./Pages/ProtectedRoutes";
import { AppContextProvider } from "./AppContext";
import axios from "axios";
import Main from "./Main";

export const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false);
  const sharedContext = require("./sharedContext.json");

  useEffect(() => {
    const authenticate = async () => {
      const res = await axios
        .get(`https://localhost:7066/Self`, {
          withCredentials: true,
        }).catch(e => console.error(e));

      setLoading(false);
      if (res !== undefined && res.status === 200) {
        setAuth(true);
        //sharedContext.currentUser = res.data;
      }
    }
    authenticate();
  }, [isAuth])

  return (
    // TODO check if we can cache chats locally
    <AppContextProvider value={sharedContext}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route element={<ProtectedRoutes isLoading={isLoading} isAuth={isAuth} />}>
            <Route path='home' element={<Homepage />} />
          </Route>
          <Route path='/' element={<Login setAuth={setAuth} />} />
          {/* <Route path='/' element={<Main isLoading={isLoading} isAuth={isAuth} />} /> */}
          <Route path='register' element={<Register />} />
          {/* <Route path='login' element={<Login setAuth={setAuth} />} /> */}
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};
