import React, { FC } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
interface MapProps {
  width: string;
  height: string;
  maxHeight: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export const Map: FC<any> = ({
  width = "100%",
  height = "80vh",
  maxHeight = "420px",
  coords = { lat: 49.445390, lng: 32.061158 },
}: MapProps) => {
  const containerStyle = {
    width,
    height,
    maxHeight,
  };

  const center = { lat: coords.lat, lng: coords.lng };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDKYMmcGqXyl3quJKk-VefGsQbDxxNJSk0",
  });
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : null}
    </div>
  );
};
