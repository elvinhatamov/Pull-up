import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import MapStyle from "./MapStyle";

import { useEffect } from "react";


export default function Map(props) {
  let listings = props.listings;
  console.log("Passed the listings down!", listings);
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const image = require("../../assets/iconparking2.png");

  let mark = [];
  let index = 0;

  listings.map((l) => {
    console.log(`Lat and lng are ${l.lat} and ${l.lng}`);
    mark.push({
      lat: parseFloat(l.lat),
      lng: parseFloat(l.lng),
      time: index,
    });
    index = index + 1;
  });

  useEffect(() => {
    console.log("Lets see Mark ", mark);
    setMarkers(mark);
  }, []);

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 43.65107, lng: -79.347015 }}
      options={{ styles: MapStyle }}
      mapContainerStyle={{ width: "100vw", height: "90vh" }}
      onClick={(event) => {
        setMarkers((current) => [
          ...current,
          {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
          },
        ]);
      }}
    >
      {markers.map((marker) => (
        <Marker
          position={marker}
          icon={{
            url: image,
            scaledSize: new window.google.maps.Size(54.5, 75),
          }}
          onClick={() => {
            setSelected(marker);
          }}
        />
      ))}
      {selected ? (
        <InfoWindow position={selected}>
          <div>
            <h2>Parking here!</h2>
            <button>Reserve</button>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
}
