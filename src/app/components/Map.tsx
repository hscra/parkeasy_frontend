"use client";

import React, { useEffect, useState } from "react";
import { Location } from "../parking/page";
import { Loader } from "@googlemaps/js-api-loader";

type MapProps = {
  locations: Location[]
  selectLocation: (cityId: number) => void
};

const Map: React.FC<MapProps> = ({ locations, selectLocation }) => {
  const markersRef = React.useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = React.useRef<google.maps.Map | null>(null);
  const [mapReady, setMapReady] = useState<boolean>(false);

  useEffect(() => {
    const initMap = async () => {
      // Load all subscomponents
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["maps", "marker"],
      });
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      // Create map
      const mapOptions: google.maps.MapOptions = {
        center: { lat: 52.191097, lng: 19.355406 },
        zoom: 6,
        mapId: "MY_NEXTJS_MAPID",
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      // Save the reference for future use
      mapInstanceRef.current = new Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );

      setMapReady(true);
    };

    initMap();
  }, []);

  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => (marker.map = null));
    markersRef.current = [];

    // Set them again
    markersRef.current = locations.map((location) => {
      const markerElement = new google.maps.marker.AdvancedMarkerElement({
        map: mapInstanceRef.current,
        position: location.position,
      });
      google.maps.event.addListener(markerElement, "click", () => {
        selectLocation(location.id)
      })
      return markerElement;
    });
  }, [locations, mapReady]);

  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef} ></div>
    </>
  );
};

export default Map;
