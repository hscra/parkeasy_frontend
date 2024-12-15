"use client";

import React, { MutableRefObject, useEffect, useState } from "react";
import { Location } from "../page";
import { Loader } from "@googlemaps/js-api-loader";
import Detail, { ParkingDetailsProps } from "../components/Detail";

type MapProps = {
  locations: Location[];
};

const Map: React.FC<MapProps> = ({ locations }) => {
  const markersRef = React.useRef<google.maps.marker.AdvancedMarkerElement[]>(
    []
  );
  const mapRef = React.useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = React.useRef<google.maps.Map | null>(null);
  const [mapReady, setMapReady] = useState<boolean>(false);
  const [details, setDetails] = useState<ParkingDetailsProps[]>([]); // transfer details to Detail.tsx componet
  const [error, setError] = useState<string | null>(null);

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

      // getLocations (latitude and logitude for marking on map)
      async function getLocation() {
        const apiUrl = "http://localhost:8080/api/locations";
        try {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Network response was not ok : ${response.status}");
          }

          const locations = await response.json();
          // console.log("Fetched locations : ", locations);  // for debugging

          const locationIds = locations.map(
            (location: { id: number }) => location.id
          );
          const detailsData = await fetchLocationDetails(locationIds);
          // console.log("Fetched location details:", detailsData); // for debugging

          const flattendDetails = detailsData.flat();
          setDetails(flattendDetails); // flatten the data array

          locations.forEach(
            (location: { lat: number; lng: number }) =>
              new AdvancedMarkerElement({
                map: Map,
                position: {
                  lat: location.lat,
                  lng: location.lng,
                },
              })
          );
        } catch (error: any) {
          console.error("Error to fetching location data", error);
        }
      }

      async function fetchLocationDetails(
        ids: number[]
      ): Promise<ParkingDetailsProps[]> {
        try {
          const detailPromises = ids.map(async (id) => {
            const response = await fetch(
              `http://localhost:8080/api/locations/${id}/getdetails`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              }
            );
            if (!response.ok) {
              throw new Error(
                `Failed to fetch details for location ${id}: ${response.statusText}`
              );
            }
            const rawData = await response.json();
            return rawData;
          });
          return Promise.all(detailPromises);
        } catch (err: any) {
          setError(err.message || "Failed to fetch location details");
          return [];
        }
      }

      setMapReady(true);
      getLocation();
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
      return markerElement;
    });
  }, [locations, mapReady]);

  // to update details asynchronously.
  useEffect(() => {
    console.log("Updated details:", details);
  }, [details]);

  // return <div id="map" style={{ height: "600px" }} ref={mapRef}></div>;
  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef}></div>
      <div>
        {details.map((detail, index) => (
          <Detail
            key={index}
            id={detail.id}
            id_locations={detail.id_locations}
            status={detail.status}
            price={detail.price}
          />
        ))}
      </div>
    </>
  );
};

export default Map;
