import React, { FC } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { MapProps } from "../../interfaces";

export const Map: FC<any> = ({
  width = "100%",
  height = "80vh",
  maxHeight = "420px",
  defaultCoords = { lat: 49.44539, lng: 32.061158 },
  markers = [],
  updateMarker,
}: MapProps) => {
  const containerStyle = {
    width,
    height,
    maxHeight,
  };
  const center = { lat: defaultCoords.lat, lng: defaultCoords.lng };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBOekKhmcij4YvQjsagQcM7-1tt4VzJw5o",
  });

  const getPosition = (e: any, id: number) => {
    const updatedMarker = {
      id,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
    };
    updateMarker(updatedMarker);
  };
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
                draggable={true}
                onDragEnd={(e) => getPosition(e, marker.id)}
              />
            ))}

          <></>
        </GoogleMap>
      ) : null}
    </div>
  );
};
