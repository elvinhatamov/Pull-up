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

  //setup navigation
  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    event.preventDefault();

    console.log("The Search Address is ", searchAddress.label);
    //use geocode to grab coordinates from address
    geocodeByAddress(searchAddress.label)
      .then((results) => getLatLng(results[0]))
      .then((coordinates) => {
        console.log(
          `Successfully got latitude and longitude of ${searchAddress.label} at`,
          coordinates.lat,
          coordinates.lng
        );

        //save necessary info as props to pass to maps
        const props = {
          searchAddress: searchAddress,
          dateFrom: dateFrom,
          dateTo: dateTo,
          lat: coordinates.lat,
          lng: coordinates.lng,
        };

        console.log("Here are the props", props);

        navigate("/listings/map", {
          state: props,
        });

        return coordinates;
      });
  };

  return (
    <div className="HomePage">
      <div className="banner">
        <div className="banner-text-item">
          <div className="banner-heading">
            <h1>Pull Up - The Top</h1>
          </div>
          <form
            className="form"
            autoComplete="off"
            onSubmit={handleSubmitSearch}
          >
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
            <button type="submit" className="book">
              Search
            </button>
          </form>
        </div>
      </div>
      <section className="services">
        <div className="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/tour-guide_onzla9.png" />
          <h2>4+ Workers</h2>
          <p>Friendly Platform</p>
        </div>
        <div className="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293738/reliability_jbpn4g.png" />
          <h2>100% </h2>
          <p>openness </p>
        </div>
        <div className="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293635/experience_a3fduk.png" />
          <h2>1+day </h2>
          <p>Experience </p>
        </div>
        <div className="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/feedback_s8z7d9.png" />
          <h2>You Happy </h2>
          <h2>We Happy </h2>
        </div>
      </section>
      <section className="places">
        <div className="places-text">
          <small>TOP RATING SPOT</small>
          <h2>Your Favourite Pull Up</h2>
        </div>

        <div className="cards">
          <div className="card">
            <div className="text">
              <div className="img-card">
                <img src="https://i.imgur.com/x4oQww9.jpg" />
              </div>
              <span className="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>Modern House DriveWay for Rent</h2>
              <p className="cost">$1 / Per Day</p>
              <div className="card-box">
                <p className="time">&#128339; 7 Days</p>
                <p className="location">📍 Toronto Downtown</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="text">
              <div className="img-card">
                <img src="https://i.imgur.com/RUb9Mjc.jpg" />
              </div>
              <span className="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>Basic house DriveWay for rent</h2>
              <p className="cost">$10 / Per Day</p>
              <div className="card-box">
                <p className="time">&#128339; 7 Days</p>
                <p className="location">📍 Markham Toronto</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="text">
              <div className="img-card">
                <img src="https://i.imgur.com/yWnXcqx.jpg" />
              </div>
              <span className="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>Nature House DriveWay for Rent</h2>
              <p className="cost">$1 / Per Day</p>
              <div className="card-box">
                <p className="time">&#128339; 7 Days</p>
                <p className="location">📍 Newmarket Toronto</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-img">
          <img src="https://i.imgur.com/aMkA30O.png" />
        </div>
        <div className="about-text">
          <small>ABOUT OUR COMPANY</small>
          <h2>We are Your Parking Support Company</h2>
          <p>Pull Up The TOP</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
