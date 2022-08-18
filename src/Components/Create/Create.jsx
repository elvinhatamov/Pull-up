import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import "./Create.css";
import { set } from "mongoose";
//grab API key from env file
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

export default function Create(props) {
  const user = props.user;

  //This is for Autocomplete
  const [searchAddress, setSearchAddress] = useState(null);

  const [rate, setRate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault();
    console.log("Current search address after click ", searchAddress);

    //handle if fields are empty
    if (!searchAddress) {
      setErrorMsg("Please input an address!");
      return;
    } else if (!rate) {
      setErrorMsg("Please input a rate!");
      return;
    }

    //fetch the latitude and longitude of address
    geocodeByAddress(searchAddress.label)
      .then((results) => getLatLng(results[0]))
      .then((coordinates) => {
        console.log(
          `Successfully got latitude and longitude of ${searchAddress.label} at`,
          coordinates.lat,
          coordinates.lng
        );

        const newList = {
          address: searchAddress.label,
          rate: rate,
          lat: coordinates.lat,
          lng: coordinates.lng,
          user: user,
        };

        console.log("Final new list is ", newList);

        try {
          //even though this is hosting form, it really creates a listing
          //path will be listings/create instead of hostings/create
          fetch("/api/listings/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newList),
          });
        } catch (err) {
          console.log(err);
          setErrorMsg(err);
        }

        navigate("/hostings/index");
      });

    //set lat and lng states from the promise object
    //fulfill rest of the work in this async function
  }

  return (
    <div className="HomePage">
      <div class="banner">
        <div class="banner-text-item">
          <div class="banner-heading">
            <h1>Become a Host</h1>
          </div>
          <form class="form" autoComplete="off" onSubmit={onSubmit}>
            <div className="search-input-bar">
              <GooglePlacesAutocomplete
                apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  value: searchAddress,
                  onChange: setSearchAddress,
                }}
              />
            </div>
            <input
              type="number"
              name="rate"
              value={rate}
              placeholder="Rate ($/hr)"
              onChange={(e) => setRate(e.target.value)}
            />
            <button type="submit" class="book">
              Submit
            </button>
          </form>
        </div>
      </div>
      <h3>{errorMsg}</h3>
    </div>
  );
}
