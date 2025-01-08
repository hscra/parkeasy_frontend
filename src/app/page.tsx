"use client";

import Detail, { ParkingSpaceDataItem } from "./components/Detail";
import Map from "./components/Map";
import React, { useEffect, useState } from "react";
import ParkingSpace from "./components/ParkingSpace";

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
  const [locations, setLocations] = useState<Location[]>([])
  const [selectedLocation, setSelectedLocation] = useState<number>(0);
  const [selectedSpace, setSelectedSpace] = useState<number>(0)

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

  const selectLocation = (id: number) => {
    setSelectedLocation(id)
    setSelectedSpace(0)
  }

  return (
    <div className="w-full min-h-screen">
      <div className=" min-h-screen bg-gray-50">
        <div className="mt-[150px] grid gap-6 p-6">
          <div className="bg-gray-200 mt-[150px] h-[700px] rounded-lg">
            <Map locations={locations} selectLocation={selectLocation}/>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-200 h-[500px] rounded-lg">
              <Detail id_location={selectedLocation} selectSpace={setSelectedSpace}/>
            </div>
            <div className="col-span-1 bg-gray-200 h-[500px] rounded-lg">
              <ParkingSpace space={selectedSpace}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;