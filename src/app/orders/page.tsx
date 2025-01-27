"use client"; // Mark as client component

import React, { useState } from "react";
import Map from "./components/Map";  // Import Map component

// Types for reservation data
export type Reservation = {
  id: number;
  time: string;
  place: string;
  paymentLocation: string;
  position: Position;
  status: string;  // New field for reservation status
};

export type Position = {
  lat: number;
  lng: number;
};

const Orders: React.FC = () => {
  // Mock data for active/current reservations (Orders)
  const mockReservations: Reservation[] = [
    {
      id: 1,
      time: "2025-01-19 14:00",
      place: "Downtown Parking Lot",
      paymentLocation: "Main Entrance Booth",
      position: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York)
      status: "Completed",
    },
    {
      id: 2,
      time: "2025-01-20 10:00",
      place: "Central Plaza Parking",
      paymentLocation: "Online Payment",
      position: { lat: 34.0522, lng: -118.2437 }, // Example coordinates (Los Angeles)
      status: "Pending",
    },
    {
      id: 3,
      time: "2025-01-21 16:30",
      place: "Market Street Garage",
      paymentLocation: "Cash at Exit",
      position: { lat: 51.5074, lng: -0.1278 }, // Example coordinates (London)
      status: "Cancelled",
    },
  ];

  // Mock data for reservation history (Past reservations)
  const reservationHistory: Reservation[] = [
    {
      id: 4,
      time: "2024-12-15 18:30",
      place: "Eastside Parking",
      paymentLocation: "Cash at Exit",
      position: { lat: 48.8566, lng: 2.3522 }, // Example coordinates (Paris)
      status: "Completed",
    },
    {
      id: 5,
      time: "2024-11-05 13:00",
      place: "Westfield Mall Parking",
      paymentLocation: "Online Payment",
      position: { lat: 37.7749, lng: -122.4194 }, // Example coordinates (San Francisco)
      status: "Completed",
    },
    {
      id: 6,
      time: "2024-09-10 11:45",
      place: "Airport Parking",
      paymentLocation: "Main Entrance Booth",
      position: { lat: 52.5200, lng: 13.4050 }, // Example coordinates (Berlin)
      status: "Expired",
    },
  ];

  // State to track the selected reservation location
  const [selectedLocation, setSelectedLocation] = useState<google.maps.LatLng | null>(null);

  // Handle reservation click and update the map's location
  const handleReservationClick = (position: Position) => {
    const latLng = new google.maps.LatLng(position.lat, position.lng);
    setSelectedLocation(latLng);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start pt-[50px]">
      <div className="w-full py-4 px-8 rounded-lg flex flex-col justify-center">
        <div className="w-full max-w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Your Reservations</h2>
              {mockReservations.length > 0 ? (
                mockReservations.map((reservation) => (
                  <button
                    key={reservation.id}
                    onClick={() => handleReservationClick(reservation.position)}
                    className="bg-gray-200 p-8 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none"
                  >
                    <p className="text-2xl mb-4">
                      <strong>Time:</strong> {reservation.time}
                    </p>
                    <p className="text-2xl mb-4">
                      <strong>Place:</strong> {reservation.place}
                    </p>
                    <p className="text-2xl">
                      <strong>Payment Location:</strong> {reservation.paymentLocation}
                    </p>
                  </button>
                ))
              ) : (
                <p className="text-xl text-gray-500">No reservations found.</p>
              )}
            </div>
            <div className="bg-gray-200 h-[700px] rounded-lg flex justify-center items-center relative z-0">
            <div className="w-full h-full rounded-lg">
              </div>
            </div>
          </div>
        </div>

        {/* Reservation History Section Below Reservations */}
        <div className="w-full px-8 md:px-16 xl:px-32 py-8 mt-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Reservation History</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Time</th>
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Place</th>
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Payment Location</th>
                <th className="py-2 px-4 text-left text-lg font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservationHistory.map((reservation) => (
                <tr key={reservation.id} className="border-b">
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.time}</td>
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.place}</td>
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.paymentLocation}</td>
                  <td className="py-4 px-4 text-lg text-gray-700">{reservation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Orders;