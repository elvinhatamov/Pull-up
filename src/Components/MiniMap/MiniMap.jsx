import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";
import MapStyle from "./MiniMap.js";
import { useEffect } from "react";

function MiniMap(props) {
  //grab props

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 0, lng: 0 }}
      options={{ styles: MapStyle }}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    ></GoogleMap>
  );
}

export default MiniMap;
