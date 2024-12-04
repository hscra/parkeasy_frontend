"use client";

import Map from "./components/Map";
import React, { useEffect, useState } from "react";

export type Location = {
  id: number,
  city: string,
  position: Position
}
export type Position = {
  lat: number,
  lng: number
}

const Home: React.FC = () => {
  const [locations, setLocations] = useState([])

  const getLocations = async () => {
    const apiUrl = "http://localhost:8080/location/getAllLocations";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setLocations(data.map((el: any) => {
        return {
          id: el.id,
          city: el.city,
          position: {
            lat: el.lat,
            lng: el.lng,
          } as Position
        } as Location
      }))
    } catch (error) {
      console.error("Error to fetching location data", error);
    }
  }

  useEffect(() => {
    getLocations();
  }, [])

  return (
    <main className="sm:container">
      <div className="min-h-full">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Map locations={locations} />
        </div>
      </div>
    </main>
  );
}

export default Home;