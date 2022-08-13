import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ListingDetail from "./Components/ListingDetail/ListingDetail";
import Navbar from "./Components/Navbar/Navbar";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  //set state using hooks method
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="wireframe">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
