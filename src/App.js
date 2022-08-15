import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ListingDetail from "./Pages/ListingDetail/ListingDetail";
import Navbar from "./Components/Navbar/Navbar";
import LoginForm from "./Components/LoginForm/LoginForm";

import HomePage from "./Pages/HomePage/HomePage";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import Create from "./Components/Listing/Listing";


function App() {
  //set state using hooks method
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  //check for token everytime something renders so we don't relogin
  useEffect(() => {
    //check local storage for a token
    let token = localStorage.getItem("token");

    //if token exists, parse and update user state
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;

      setUser(userDoc);
    }
  }, []);

  const handleLoginUpdate = (incomingUser) => {
    console.log(
      `handleLoginUpdate Triggered! incoming user is : ${incomingUser}`
    );
    setUser(incomingUser);
  };

  return (
    <div className='App'>
      <div className='wireframe'>
        {user ? (
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/listing/detail' element={<ListingDetail />} />

            <Route
              path='/signup'
              element={<SignUpForm handleLoginUpdate={handleLoginUpdate} />}
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route
              path='/signup'
              element={<SignUpForm handleLoginUpdate={handleLoginUpdate} />}
            ></Route>
            <Route
              path='*'
              element={<LoginForm handleLoginUpdate={handleLoginUpdate} />}
            />
            <Route
              path='/hostings/create'
              element={<Create />}
            />
          </Routes>
        )}
      </div>
    </div>
  )
}

export default App;
