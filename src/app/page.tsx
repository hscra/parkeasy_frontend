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
    <div className="w-full min-h-screen">
      <div className="pt-[150px] min-h-screen bg-gray-50">
        <div className="grid gap-6 p-6">
          <div className="bg-gray-200 h-[700px] rounded-lg">
            <Map locations={locations} />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-200 h-[500px] rounded-lg"></div>
            <div className="col-span-1 bg-gray-200 h-[500px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;