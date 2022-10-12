/* global google */

import React, { FC, useEffect, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { DEFAULT_COORDS } from "../../constants";

export const Map: FC<any> = ({
  width = "100%",
  height = "80vh",
  maxHeight = "420px",
  defaultCoords = DEFAULT_COORDS,
  markers = [],
  updateMarker = () => {},
  draggable = false,
}) => {
  const containerStyle = {
    width,
    height,
    maxHeight,
  };
  const [route, setRoute] = useState<any>();

  const center = { lat: defaultCoords.lat, lng: defaultCoords.lng };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBOekKhmcij4YvQjsagQcM7-1tt4VzJw5o",
    libraries: ["geometry"],
  });

  const getPosition = (e: any, id: number) => {
    const updatedMarker = {
      id,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
    };
    updateMarker(updatedMarker);
  };

  const calculateRoute = async () => {
    const start = {
      lat: markers[0].position.lat,
      lng: markers[0].position.lng,
    };

    const end = {
      lat: markers[1].position.lat,
      lng: markers[1].position.lng,
    };

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setRoute(results?.routes[0]?.legs[0]?.distance?.text);
        } else {
          console.error("ERROR", result);
        }
      },
    );
  };

  useEffect(() => {
    if (markers.length === 2) calculateRoute();
  }, [markers]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {markers.length &&
            markers.map((marker: any) => (
              <Marker
                key={marker.id}
                position={marker.position}
                draggable={draggable}
                onDragEnd={(e) => getPosition(e, marker.id)}
              />
            ))}
          {route && <DirectionsRenderer directions={route} />}
        </GoogleMap>
      ) : null}
    </div>
  );
};
