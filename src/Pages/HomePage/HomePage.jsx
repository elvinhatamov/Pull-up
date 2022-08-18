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

    navigate("/listings/detail", { props });
  };

  return (
    <div className="HomePage">
      <div class="banner">
        <div class="banner-text-item">
          <div class="banner-heading">
            <h1>Where would you like to be!</h1>
            <h1>Have no fear Pull up Park here</h1>
          </div>
          <form class="form" autoComplete="off" onSubmit={handleSubmitSearch}>
            <div className="search-input-bar">
              <GooglePlacesAutocomplete
                apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  value: searchAddress,
                  onChange: setSearchAddress,
                }}
              />
            </div>
            From:
            <input
              type="date"
              name="dateFrom"
              value={dateFrom}
              className="date"
              onChange={(e) => setDateFrom(e.target.value)}
            />
            To:
            <input
              type="date"
              name="dateTo"
              value={dateTo}
              className="date"
              onChange={(e) => setDateTo(e.target.value)}
            />
            <a href="/hostings/index" type="submit" class="book">
              book
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
