import React, { useState, useEffect } from "react";
import "./HomePage.css";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
} from "@react-google-maps/api";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Link, useNavigate, Redirect } from "react-router-dom";

//grab API key from env file
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

function HomePage(props) {
  //setup state for each input
  const [searchAddress, setSearchAddress] = useState(null);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  //setup navigation
  const navigate = useNavigate();

  //setup loader for google maps
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries: ["places"],
  // });

  // console.log(REACT_APP_GOOGLE_MAPS_API_KEY);

  // if (!isLoaded) {
  //   console.log("API not loaded!");
  // }

  const handleSubmitSearch = (event) => {
    event.preventDefault();

    const props = {
      searchAddress: searchAddress,
      dateFrom: dateFrom,
      dateTo: dateTo,
      //timeslot: timeSlot,
    };

    console.log(props);

    navigate("/listings/detail", { props });
  };

  return (
    <div className="HomePage">
      <div className="search-container">
        <h1>Where Do You Plan To Be?</h1>
        <div className="search-inputs">
          <form autoComplete="off" onSubmit={handleSubmitSearch}>
            <div className="search-input-bar">
              <GooglePlacesAutocomplete
                apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  value: searchAddress,
                  onChange: setSearchAddress,
                }}
              />
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

            <button className="search-btn" type="submit">
              Search Now
            </button>
          </form>
        </div>
      </div>
      <div className="advertised-listings">
        Advertised Listings Square Cards Here
      </div>
    </div>
  );
}

export default HomePage;
