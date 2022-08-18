import React, { useState, useEffect } from "react";
import "./HomePage.css";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
} from "@react-google-maps/api";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { Link, useNavigate, Redirect } from "react-router-dom";

//grab API key from env file
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

function HomePage(props) {
  //setup state for each input
  const [searchAddress, setSearchAddress] = useState(null);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  //prepare states for latitude and longitude
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  //setup navigation
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();

    console.log("The Search Address is ", searchAddress.label);
    //use geocode to grab coordinates from address
    const promiseobj = geocodeByAddress(searchAddress.label)
      .then((results) => getLatLng(results[0]))
      .then((coordinates) => {
        console.log(
          `Successfully got latitude and longitude of ${searchAddress.label} at`,
          coordinates.lat,
          coordinates.lng
        );
        return coordinates;
      });

    async function getCoordinates() {
      try {
        const coordinates = await promiseobj;
        setLat(coordinates.lat);
        setLng(coordinates.lng);
      } catch (err) {
        console.log(err);
      }
    }
    getCoordinates();

    //save necessary info as props to pass to maps
    const props = {
      searchAddress: searchAddress,
      dateFrom: dateFrom,
      dateTo: dateTo,
      lat: lat,
      lng: lng,
      //timeslot: timeSlot,
    };

    console.log(props);

    navigate("/listings/map", { props: props });
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
