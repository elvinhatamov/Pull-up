import React, { useState, useEffect } from "react";
import "./HomePage.css";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
} from "@react-google-maps/api";

function HomePage(props) {
  //setup state for each input
  const [searchAddress, setSearchAddress] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");

  //setup loader for google maps
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  //   libraries: ["places"],
  // });

  return (
    <div className="HomePage">
      <div className="search-container">
        <h1>Where Do You Plan To Be?</h1>
        <div className="search-inputs">
          <form autoComplete="off">
            <div className="search-input-bar">
              <Autocomplete>
                <input
                  type="text"
                  name="searchaddress"
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  placeholder="Input your destination"
                  required
                />
              </Autocomplete>
              <button className="search-btn" type="submit">
                Search Now
              </button>
            </div>
            <div className="date-input-bar">
              Date From:
              <input
                type="date"
                name="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
              To:
              <input
                type="date"
                name="dateTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
            <div className="time-input-bar">
              Time From:
              <input
                type="time"
                name="timeFrom"
                value={timeFrom}
                onChange={(e) => setTimeFrom(e.target.value)}
              />
              To:
              <input
                type="time"
                name="timeTo"
                value={timeTo}
                onChange={(e) => setTimeTo(e.target.value)}
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

export default HomePage;
