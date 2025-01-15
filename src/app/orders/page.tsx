// Client Component
import React from "react";
import Table from "@mui/joy/Table";

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

interface OrdersProps {
  reservations: Reservation[];
  user: User | null;
}

const Orders: React.FC<OrdersProps> = ({ reservations = [], user }) => {
  // if (!user) {
  //   return <div>No user data available</div>;
  // }

  return (
    <div id="orders" className="flex justify-center align-center">
      <div>
        <h2>User Profile</h2>
        <Table aria-label="User Profile">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user ? (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan={3}>No user data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <div>
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
