import Map from "../../Components/Map/Map";
import { useLoadScript, Marker } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function MapListingsPage(props) {
  const location = useLocation();
  //console.log("Is location working?", location);

  const [listings, setListings] = useState(null);
  const user = props.user;

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
      {listings ? <Map listings={listings} /> : <h3>Now Loading...</h3>}
    </div>
  );
}
