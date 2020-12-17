import React, { useState, useEffect } from "react";
import mapStyles from './mapStyles.js';

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const fetchURL = "https://why-leave.herokuapp.com/";

function GoogleMaps() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [data, setData] = useState(null);

  const statistics = (population, refugees) => {
    return ((population / refugees) * 100).toFixed(2)
  };
  
  const getData = () =>
    fetch(`${fetchURL}/countries`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <GoogleMap
    // options={{
    //   // draggable: false,
    //   // scrollwheel: false,
    //   // disableDoubleClickZoom: true,
    // }}
      defaultZoom={3}
      defaultCenter={{ lat: 28, lng: 1.6 }}
      defaultOptions={{ styles: mapStyles, minZoom: 3, maxZoom: 3, disableDefaultUI: true, gestureHandling: "greedy" }}

    >
      {data?.map((country) => (
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
            <p>
              Population: {selectedCountry.population} |   Refugees:{selectedCountry.refugees} |   Asylum seekers: { selectedCountry.asylum_seekers} |   Percentage of leavers: {statistics(selectedCountry.refugees, selectedCountry.population)}%
            </p>
            <p>{selectedCountry.causes[0].description} </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

function Map() {
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

export default Map;
