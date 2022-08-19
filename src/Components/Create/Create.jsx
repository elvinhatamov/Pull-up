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

//array of house photos
const photos = [
  "https://i.imgur.com/x4oQww9.jpg",
  "https://i.imgur.com/RUb9Mjc.jpg",
  "https://i.imgur.com/yWnXcqx.jpg",
  "https://i.imgur.com/Ow0gcSh.jpg",
  "https://i.imgur.com/b7E7Fd2.jpg",
  "https://i.imgur.com/GMzqUZ2.jpg",
  "https://i.imgur.com/FJzdEnW.jpg",
  "https://i.imgur.com/yq4TWa3.jpg",
];
const photos_len = photos.length;

console.log("Length of photos array is ", photos_len);

function randomNum(n) {
  return Math.floor(Math.random() * n);
}

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

        //generate random number for different photo
        const rand = randomNum(photos_len);
        console.log("Random number is ", rand);

        const newList = {
          address: searchAddress.label,
          rate: rate,
          lat: coordinates.lat,
          lng: coordinates.lng,
          user: user,
          photo: photos[rand],
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
  async function deleteItem(){
    try {
     const result = await fetch("/api/hostings/:id", {
      method: "delete"
     })
     console.log(result)
     
    } catch (error) {
     console.log(error)
    }
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
              placeholder="Rate ($/day)"
              onChange={(e) => setRate(e.target.value)}
            />
            <button type="submit" class="book">
              Submit
            </button>
        <button type ="submit" onSubmit={deleteItem}></button>
          </form>
        </div>
      </div>
      <h3>{errorMsg}</h3>
    </div>
  );
}
