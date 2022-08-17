import React from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import MapStyle from "./MapStyle";
import Marker from "react-google-maps/lib/components/Marker";

export default function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        zoom={10}
        center={{ lat: 43.65107, lng: -79.347015 }}
        options={{ styles: MapStyle }}
        mapContainerStyle={{ width: "100vw", height: "90vh" }}
      />
    </LoadScript>
  );
}
