import Map from "../../Components/Map/Map";
import { useLoadScript, Marker } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function MapListingsPage(props) {
  const location = useLocation();
  // console.log("Is location working? Lat", location.state.lat);
  // console.log("Is location working? Address", location.state.searchAddress);

  const [listings, setListings] = useState(null);
  const user = props.user;
  const searchAddress = location.state.searchAddress;
  const lat = location.state.lat;
  const lng = location.state.lng;

  //future use
  const dateFrom = location.state.lat;
  const dateTo = location.state.lng;

  //grab all the listings in preparation to populate with markers
  useEffect(() => {
    fetch("/api/listings/index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // address = data.address;
        // rate = data.rate;
        setListings(data);
        console.log(data);
      });
  }, []);

  //LOAD THE MAP
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      {listings ? (
        <Map
          listings={listings}
          searchAddress={searchAddress}
          lat={lat}
          lng={lng}
          mapWidth={"100vw"}
          mapHeight={"90vh"}
          zoom={10}
        />
      ) : (
        <h3>Now Loading...</h3>
      )}
    </div>
  );
}
