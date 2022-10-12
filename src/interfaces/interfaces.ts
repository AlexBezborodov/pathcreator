import { Dispatch, SetStateAction } from "react";

export interface AddPathProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DataPath {
  id?: number;
  title?: string;
  shortDescription?: string;
  fullDescription?: string;
  result?: number;
  isFavourite?: Boolean;
  coords?: Array<Coords>;
}

interface Coords {
  lat?: number;
  lng?: number;
}

export interface MapProps {
  width: string;
  height: string;
  maxHeight: string;
  defaultCoords: {
    lat: number;
    lng: number;
  };
  markers: Array<Marker> | [];
  updateMarker: (updatedMarker: Marker) => void;
}

export interface Marker {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
}
