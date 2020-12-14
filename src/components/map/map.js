import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import jsonData from "../../data/heroku.json";
import mapStyles from "./mapStyles.js";

function GoogleMaps() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 51.39305, lng: -0.30432 }}
      defaultOptions={{ styles: mapStyles }}
      options={{ disableDefaultUI: true }}
    >
      {jsonData.map((country) => (
        <Marker
          key={country.id}
          position={{
            lat: country.latitude,
            lng: country.longitude,
            population: country.population,
          }}
          onClick={() => {
            setSelectedCountry(country);
          }}
          icon={{
            url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1280px-Flag_of_Syria.svg.png",
            scaledSize: new window.google.maps.Size(40, 30),
          }}
        />
      ))}

      {selectedCountry && (
        <InfoWindow
          position={{
            lat: selectedCountry.latitude,
            lng: selectedCountry.longitude,
          }}
          onCloseClick={() => {
            setSelectedCountry(null);
          }}
        >
          <div>
            <h2>{selectedCountry.country}</h2>
            <p>{selectedCountry.population}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

export default function Map() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
