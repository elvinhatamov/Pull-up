import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="pullup-logo-div">
        <h1>
          <span className="pullup-logo-p">P</span>ULLUP
        </h1>
      </div>
      <div className="nav-buttons-div">
        <h1>empty atm but will have buttons</h1>
      </div>
      <div className="signup-login-div">
        <img src={process.env.PUBLIC_URL + "images/usericon.png"} />
        <h1>Logout</h1>
      </div>
    </nav>
  );
}

export default Navbar;
