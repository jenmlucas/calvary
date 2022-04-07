import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from "react-google-maps";

// function Map(props) {
//   return (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: 33.39822, lng: -111.78802 }}
//     >
//       {props.isMarkerShown && (
//         <Marker position={{ lat: 33.39822, lng: -111.78802 }} />
//       )}
//     </GoogleMap>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  title: {
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "40px",
    textAlign: "center",
  },
  content: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: "20px",
    textAlign: "center",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Typography
          style={{ width: "40vw", height: "40vh", border: "5px solid" }}
        >
          Map will go here
        </Typography>
        <div>
          <Typography className={classes.title}>Service Times</Typography>
          <Typography className={classes.content}> Sundays 10 AM</Typography>
          <Typography className={classes.content}> Wednesday 7 PM</Typography>
        </div>
        {/* <div style={{ width: "40vw", height: "40vh" }}>
        <WrappedMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div> */}
        
      </div>
    </div>
  );
}
