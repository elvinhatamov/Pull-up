import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import MapStyle from "./MapStyle";

export default function Map() {
  const [markers, setMarkers] = React.useState([]);
  const image = require("../../assets/iconparking2.png");

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
        <Marker position={marker} icon={image} />
      ))}
    </GoogleMap>
  );
}
