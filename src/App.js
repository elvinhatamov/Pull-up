import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Navbar from "./Components/Navbar/Navbar";
import LoginForm from "./Components/LoginForm/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  //set state using hooks method
  const [user, setUser] = useState(null);

  //check for token at start once
  useEffect(() => {
    //check local storage for a token
    let token = localStorage.getItem("token");

    //if token exists, parse and update user state
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      setUser(userDoc);
    }
  });

  return (
    <div className="App">
      <div className="wireframe">
        {user ? (
          <Routes>
            <Route path="/" element={<ListingDetail />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
