import React from "react";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h1> HOME PAGE</h1>
      <div className="search-inputs">
        <h3>Search Bar here</h3>
        <h3>Check-In Dates Here</h3>
        <h3>Check-Out Dates Inputs Here</h3>
      </div>
      <div className="advertised-listings">
        Advertised Listings Square Cards Here
      </div>
    </div>
  );
}

export default HomePage;
