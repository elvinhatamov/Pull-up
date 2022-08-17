import "./App.css";
import React, { useState, useEffect } from "react";
import { Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ListingDetail from "./Pages/ListingDetail/ListingDetail";
import Navbar from "./Components/Navbar/Navbar";
import LoginForm from "./Components/LoginForm/LoginForm";
import MapListingsPage from "./Pages/MapListingsPage/MapListingsPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import PersonalListPage from "./Pages/PersonalListPage/PersonalListPage";
import Create from "./Components/Create/Create";

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
    setUser(incomingUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="App">
      <div className="wireframe">
        <Navbar handleLogout={handleLogout} user={user} />
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/listings/detail"
              element={
                <ListingDetail id="62fc20f07c6b345020bbc194" user={user} />
              }
            />
            <Route path="/hostings/index" element={<PersonalListPage />} />
            <Route path="/hostings/create" element={<Create user={user} />} />
            <Route path="/listings/map" element={<MapListingsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/signup"
              element={<SignUpForm handleLoginUpdate={handleLoginUpdate} />}
            ></Route>
            <Route
              path="*"
              element={<LoginForm handleLoginUpdate={handleLoginUpdate} />}
            />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
