import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
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

    //set lat and lng states from the promise object
    //fulfill rest of the work in this async function
    async function getCoordinates() {
      try {
        const coordinates = await promiseobj;

        //insend the rest of the information here
        const newList = {
          address: searchAddress.label,
          rate: rate,
          lat: coordinates.lat,
          lng: coordinates.lng,
          user: user,
        };

        console.log("Final new list is ", newList);

        //even though this is hosting form, it really creates a listing
        //path will be listings/create instead of hostings/create
        let response = await fetch("/api/listings/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newList),
        });
      } catch (err) {
        console.log(err);
        setErrorMsg(err);
      }
    }
    getCoordinates();

    navigate("/hostings/index");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Address</label>
        <GooglePlacesAutocomplete
          apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
          selectProps={{
            value: searchAddress,
            onChange: setSearchAddress,
          }}
        />{" "}
        <br />
        <label>Rate ($/hr) </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          name="rate"
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{errorMsg}</h3>
    </div>
  );
}
