import { Component } from "react";
import React, { useState, useEffect } from "react";

function LoginForm(props) {
  //hook setup for some value to be relaced

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    //Code ability to login authenticate token and login later!

    try {
    } catch (err) {
      console.log("Login Form Error: ", err);
    }
  };

  return (
    <div className="LoginForm">
      <h1> Login</h1>
      <br />
      <form autoComplete="off">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOG IN</button>
      </form>
      <p className="login-error-message">"Will put errors here"</p>
    </div>
  );
}

export default LoginForm;
