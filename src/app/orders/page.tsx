"use client";
import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import { useRouter } from "next/navigation";

interface Reservation {
  reservationId: number;
  parkingSpaceId: number;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const Orders: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch user data from localStorage

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch("/api/getSession", {credentials: "include"});
      console.log("/orders page session", res);

      if (!res.ok) {
        router.push("/signin");
        return;
      }

      try {
        const data = await res.json();
        setUser(data); // Assuming the user data is returned in the response
      } catch (error) {
        console.error("Error parsing JSON:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [router]);

  // Fetch reservations for the user
  useEffect(() => {
    const fetchReservations = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          process.env.SERVER_DOMAIN + "/reservation/getAll",
          {
            method: "GET",
            credentials: "include", // Include session cookies
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reservations.");
        }

        const data = await response.json();
        setReservations(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchReservations();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (!user) {
    return <div>No user data available. Please log in again.</div>;
  }

  return (
    <div id="orders" className="flex justify-center align-center">
      {/* User Information Table */}
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <Table
          aria-label="User Profile"
          className="table-auto w-full border-collapse"
        >
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Reservations Table */}
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <h2>Reservations</h2>
        <Table aria-label="Reservations">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Parking Space ID</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.reservationId}>
                <td>{res.reservationId}</td>
                <td>{res.parkingSpaceId}</td>
                <td>{res.userId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
