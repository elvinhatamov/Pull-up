import { Component } from "react";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm(props) {
  //hook setup for some value to be relaced

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //to redirect to page after login
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    console.log(`Email submitted: ${email} and pw submitted: ${password}`);

    //Code ability to login authenticate token and login later!
    try {
      const fetchResponse = await fetch("api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      console.log(fetchResponse);
      if (!fetchResponse.ok)
        throw new Error("Login Fetch Failed - Something wrong");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      //grab user's (Mongo) document from the json token
      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      console.log("This is userDoc from login after parsing token: ", userDoc);
      //PASSING USER JUST TO TRIGGER REFRESH
      props.handleLoginUpdate(userDoc);

      //at the end redirect them to home page
    } catch (err) {
      console.log("Login Form Error: ", err);
    }
  };

  return (
    <div className="LoginForm" onSubmit={handleSubmit} id="login">
      <form name="form-login">
        <span class="fontawesome-user"></span>
        <input
          type="text"
          id="user"
          placeholder="Username"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span class="fontawesome-lock"></span>
        <input
          type="password"
          id="pass"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
      </form>
      <p className="login-error-message">"Will put errors messages here"</p>
    </div>
  );
}

export default LoginForm;
