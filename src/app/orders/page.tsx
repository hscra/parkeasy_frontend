"use client"; // Mark as client component

import React, { useState, useEffect } from "react";
import Map from "../components/Map"; 
import Detail, { ParkingSpaceDataItem } from "../components/Detail";
import ParkingSpace from "../components/ParkingSpace";
import { Location } from "../parking/page";

// Types for reservation data
export type Reservation = {
  id: number;
  time: string;
  place: string;
  paymentStatus: string;
  position: Position;
};

export type Position = {
  lat: number;
  lng: number;
};

const Orders: React.FC = () => {

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

  const mockReservations: Reservation[] = [
    {
      id: 1,
      time: "2025-01-19 14:00",
      place: "Downtown Parking Lot",
      paymentStatus: "Paid",
      position: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York)
    },
    {
      id: 2,
      time: "2025-01-20 10:00",
      place: "Central Plaza Parking",
      paymentStatus: "Awaiting Payment",
      position: { lat: 34.0522, lng: -118.2437 }, // Example coordinates (Los Angeles)
    },
    {
      id: 3,
      time: "2025-01-21 16:30",
      place: "Market Street Garage",
      paymentStatus: "Paid",
      position: { lat: 51.5074, lng: -0.1278 }, // Example coordinates (London)
    },
  ];

  // Mock data for reservation history (Past reservations)
  const reservationHistory: Reservation[] = [
    {
      id: 4,
      time: "2024-12-15 18:30",
      place: "Eastside Parking",
      paymentStatus: "Awaiting Payment",
      position: { lat: 48.8566, lng: 2.3522 }, // Example coordinates (Paris)
    },
    {
      id: 5,
      time: "2024-11-05 13:00",
      place: "Westfield Mall Parking",
      paymentStatus: "Paid",
      position: { lat: 37.7749, lng: -122.4194 }, // Example coordinates (San Francisco)
    },
    {
      id: 6,
      time: "2024-09-10 11:45",
      place: "Airport Parking",
      paymentStatus: "Awaiting Payment",
      position: { lat: 52.5200, lng: 13.4050 }, // Example coordinates (Berlin)
    },
  ];

  // State to track the selected reservation location

  // Handle reservation click and update the map's location
  const handleReservationClick = (position: Position) => {
    const latLng = new google.maps.LatLng(position.lat, position.lng);
    setSelectedLocation(latLng);
  };

  return (
    <div className="w-full h-full bg-gray-50 p-6">
    <h2 className="text-3xl font-semibold text-left text-blue-600 mb-8">Your Reservations</h2>
      <div className="w-full py-4 px-8 rounded-lg flex flex-col justify-center">
        <div className="w-full max-w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            
              {mockReservations.length > 0 ? (
                mockReservations.map((reservation) => (
                  <button
                    key={reservation.id}
                    onClick={() => handleReservationClick(reservation.position)}
                    className="bg-gray-200 p-8 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none"
                  >
                    <p className="text-2xl mb-4">
                      <strong className="text-blue-400">Time:</strong> {reservation.time}
                    </p>
                    <p className="text-2xl mb-4">
                      <strong className="text-blue-500">Place:</strong> {reservation.place}
                    </p>
                    <p className="text-2xl mb-4">
                      <strong className="text-blue-600">Payment Status:</strong> {reservation.paymentStatus}
                    </p>
                  </button>
                ))
              ) : (
                <p className="text-xl text-gray-500">No reservations found.</p>
              )}
            </div>
            <div className="bg-gray-200 h-[700px] rounded-lg flex justify-center items-center relative z-0">
            <div className="w-full h-full rounded-lg">
            <Map locations={locations} selectLocation={selectLocation} />
              </div>
            </div>
          </div>
        </div>

        {/* Reservation History Section Below Reservations */}
        <div className="w-full px-8 md:px-16 xl:px-32 py-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Reservation History</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Time</th>
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Place</th>
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {reservationHistory.map((reservation) => (
                <tr key={reservation.id} className="border-b">
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.time}</td>
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.place}</td>
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Orders;