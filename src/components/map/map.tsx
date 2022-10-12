import React, { FC, useEffect, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { MapProps } from "../../interfaces";

export const Map: FC<any> = ({
  width = "100%",
  height = "80vh",
  maxHeight = "420px",
  defaultCoords = { lat: 49.44539, lng: 32.061158 },
  markers = [],
  updateMarker = () => {},
  draggable = false,
}: MapProps) => {
  const containerStyle = {
    width,
    height,
    maxHeight,
  };
  const center = { lat: defaultCoords.lat, lng: defaultCoords.lng };

  const [route, setRoute] = useState<any>();
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
    const start = new window.google.maps.LatLng(
      markers[0].position.lat,
      markers[0].position.lng,
    );

    const end = new window.google.maps.LatLng(
      markers[1].position.lat,
      markers[1].position.lng,
    );

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: start,
      destination: end,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setRoute(results?.routes[0]?.legs[0]?.distance?.text);
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
            markers.map((marker) => (
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
