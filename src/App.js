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
  const sharedContext = {
    currentUser: 'none',
    credentialsDB: {
      "alice": "12345",
      "bob": "foo123",
      "tomer": "12345",
      "daniel": "12345",
    },
    userData: {
      "alice": {
        "photo": "./alice.jpg",
        "nickname": "alli",
        "contacts": {
          "bob": ["chat_history_w_bob"],
          "Tomer": ["chat_history_w_tomer"]
        }

      },
      "bob": {
        "photo": "bob_photo_path",
        "nickname": "bobby B",
        "contacts": {
          "alice": ["chat_history_w_alice"],
          "Tomer": ["chat_history_w_tomer"]
        }
      },
      "tomer": {
        "photo": "./download.jpg",
        "nickname": "Tomer Pardilov",
        "contacts": {
          "alice": ["chat_history_w_alice"],
          "bob": ["chat_history_w_bob"],
          "daniel":[{'text':'Hi from bubble!','isSelf':false}]
        }
      }
        ,
        "daniel": {
          "photo": "./daniel.jpg",
          "nickname": "danny BOI",
          "contacts": {
            "alice": ["chat_history_w_alice"],
            "Tomer": ["chat_history_w_tomer"]
          }
        }
      }
    }
  
  return (
    <AppContextProvider value={sharedContext}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="homepage" element={<Homepage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}



