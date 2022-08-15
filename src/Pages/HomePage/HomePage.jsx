import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";

function HomePage(props) {
  const [searchAddress, setSearchAddress] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div className="HomePage">
      <Navbar />
      <div className="search-container">
        <h1>Where Do You Plan To Be?</h1>
        <div className="search-inputs">
          <form autoComplete="off">
            <div className="search-input-bar">
              <input
                type="text"
                name="searchaddress"
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                placeholder="Input your destination"
                required
              />
              <button className="search-btn" type="submit">
                Search Now
              </button>
            </div>
            <div className="date-input-bar">
              Date From:
              <input
                type="date"
                name="datefrom"
                value={dateFrom}
                onChange={(e) => setSearchAddress(e.target.value)}
              />
            </div>
          </form>
          <h3>Check-In Dates Here</h3>
          <h3>Check-Out Dates Inputs Here</h3>
        </div>
      </div>
      <div className="advertised-listings">
        Advertised Listings Square Cards Here
      </div>
    </div>
  );
}
