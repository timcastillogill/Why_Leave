import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

function GoogleMaps() {
  return (
     <GoogleMap
      defaultZoom={2.5}
      defaultCenter={{lat: 51.39305, lng: -0.304320}}
      />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

export default function Map() {
  return (
  < div style={{width: '100vw', height: '100vh'}}>
  <WrappedMap
    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='}
    loadingElement={<div style={{ height: "100%" }}/>}
    containerElement={<div style={{ height: "100%" }}/>}
    mapElement={<div style={{ height: "100%" }}/>}
   />
  </div>
 );
}
