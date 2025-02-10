"use client";

import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import Map from "../components/Map";
import ParkingSpace from "../components/ParkingSpace";

export type Location = {
  id: number;
  city: string;
  position: Position;
};

export type Position = {
  lat: number;
  lng: number;
};

const Parking: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number>(0);
  const [selectedSpace, setSelectedSpace] = useState<number>(0);

  const getLocations = async () => {
    const apiUrl = process.env.SERVER_DOMAIN + "/location/getAllLocations";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setLocations(
        data.map((el: any) => ({
          id: el.id,
          city: el.city,
          position: {
            lat: el.lat,
            lng: el.lng,
          } as Position,
        }))
      );
    } catch (error) {
      console.error("Error fetching location data", error);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  const selectLocation = (id: number) => {
    setSelectedLocation(id);
    setSelectedSpace(0);
  };

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      {/* Title for the entire page */}
      <h1 className="text-3xl font-semibold text-left text-blue-600 mb-8">
        Find - Reserve - Park
      </h1>

      {/* Top Section: Map and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <div className="bg-white shadow-lg rounded-lg h-[500px] relative">
          <div className="absolute inset-0">
            <Map locations={locations} selectLocation={selectLocation} />
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Details</h2>
          <Detail id_location={selectedLocation} selectSpace={setSelectedSpace} />
        </div>
      </div>

      {/* Spacer to push Parking Space further down */}
      <div className="mt-32"></div>

      {/* Bottom Section: Parking Space */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Parking Space</h2>
        <ParkingSpace space={selectedSpace} />
      </div>
    </div>
  );
};

export default Parking;