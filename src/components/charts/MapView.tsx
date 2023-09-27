import { CENTER_SH, DEFAULT_ZOOM } from "@/constants";
import { Coordinates } from "@/types";
import * as React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationMarker from "../LocationMarker";
import { useViews } from "@/hooks/useViews";
import Tooltip from "../Tooltip";

type MapViewProps = {
  marker?: Array<Coordinates>;
};

const MapView = ({ marker }: MapViewProps) => {
  const { views } = useViews();
  return (
    <Map
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude:
          views?.current?.initialMapCenter?.longitude || CENTER_SH.longitude,
        latitude:
          views?.current?.initialMapCenter?.latitude || CENTER_SH.latitude,
        zoom: views?.current?.initialZoomState || DEFAULT_ZOOM,
      }}
      style={{ width: 1000, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <NavigationControl />
      {marker &&
        marker?.length > 0 &&
        marker
          ?.filter((f) => !Number.isNaN(f.latitude))
          .map((entry, index) => (
            <Tooltip
              content={
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <strong>LAT:</strong>
                    {entry.latitude}
                  </div>
                  <div className="flex gap-2">
                    <strong>LON:</strong>
                    {entry.longitude}
                  </div>
                </div>
              }
              key={index}
            >
              <Marker
                longitude={entry.longitude}
                latitude={entry.latitude}
                anchor="bottom"
              >
                <LocationMarker className="fill-markerRed" />
              </Marker>
            </Tooltip>
          ))}
    </Map>
  );
};

export default MapView;
