"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { read } from "fs";

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["maps", "marker"],
      });

      const { Map } = await loader.importLibrary("maps");
      // init marker
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      // test for position
      const position = {
        lat: 50.0647,
        lng: 19.945,
      };
      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 11,
        mapId: "MY_NEXTJS_MAPID",
      };
      // setup map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // fetch latitude,longitude
      async function getLocation() {
        const apiUrl = "http://localhost:8080/map/locations";
        try {
          const response = await fetch(apiUrl, {
            method: "GET",
            credentials: "include",
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const locations = await response.json();
          locations.forEach(
            (location: { lat: number; lng: number }) =>
              new AdvancedMarkerElement({
                map: map,
                position: {
                  lat: location.lat,
                  lng: location.lng,
                },
              })
          );
        } catch (error) {
          console.error("Error to fetching location data", error);
        }
      }

      getLocation(); // call getLocation()
    };

    initMap();
  }, []);

  return <div style={{ height: "600px" }} ref={mapRef} />;
}
