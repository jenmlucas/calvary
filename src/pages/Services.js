import { Typography } from "@mui/material";
import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map(props) {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 33.39822, lng: -111.78802 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 33.39822, lng: -111.78802 }} />
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Home() {
  return (
    <div>
      <Typography>
          Service Times
          <br></br>
          Sundays 10 AM 
          <br></br>
          Wednesday 7 PM
          <br></br>
      </Typography>
      <div style={{ width: "40vw", height: "40vh" }}>
        <WrappedMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
