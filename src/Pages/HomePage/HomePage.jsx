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
            <h1>Pull Up - The Top</h1>
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
      <section class="services">
        <div class="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/tour-guide_onzla9.png" />
          <h2>7+ Workers</h2>
        </div>
        <div class="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293738/reliability_jbpn4g.png" />
          <h2>100% openness </h2>
        </div>
        <div class="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293635/experience_a3fduk.png" />
          <h2>1+day Experience</h2>
        </div>
        <div class="service-item">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/feedback_s8z7d9.png" />
          <h2>98% Our Travelers are Happy</h2>
        </div>
      </section>
      <section class="places">
        <div class="places-text">
          <small>FEATURED TOURS PACKAGES</small>
          <h2>Favourite Places</h2>
        </div>

        <div class="cards">
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293736/james-wheeler_xqmq2y.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Vancouver, Canada</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293755/paris_uj8wum.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Paris, France</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293955/monaco_usu7xb.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Monaco, Monaco</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293874/switzerland_tubxcm.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Bern, Switzerland</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293673/korea_bxrcj5.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Seoul, South Korea</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293673/night-4336403_1920_demehp.jpg" />
              </div>
            </div>

            <div class="text">
              <span class="rating">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </span>
              <h2>The Dark Forest Adventure</h2>
              <p class="cost">$1870 / Per Person</p>
              <div class="card-box">
                <p class="time">&#128339; 3 Days</p>
                <p class="location">&#9992; Tokyo, japan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
