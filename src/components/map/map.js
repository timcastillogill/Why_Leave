import React, { useState } from 'react';
import {GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

import * as parkData from "../../data/skateboard-parks.json";
function GoogleMaps() {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={2.5}
      defaultCenter={{lat: 51.39305, lng: -0.304320}}
      >
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow>
          position={{
          lat: selectedPark.geometry.coordinates[1],
          lng: selectedPark.geometry.coordinates[0]
        }}
          <div>park details</div>
        </InfoWindow>
      )}
      </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

export default function Map() {
  return (
  < div style={{width: '100vw', height: '100vh'}}>
  <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{ height: "100%" }}/>}
    containerElement={<div style={{ height: "100%" }}/>}
    mapElement={<div style={{ height: "100%" }}/>}
   />
  </div>
 );
}
