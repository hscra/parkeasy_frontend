import React from "react";
import ParkingSpace, { ParkingSpaceProps } from "./ParkingSpace";

export type ParkingDetailsProps = {
  id: number;
  status: string;
  price: number;
  id_locations: ParkingSpaceProps[];
};

const Detail: React.FC<ParkingDetailsProps> = ({
  id,
  status,
  price,
  id_locations = [],
}) => {
  return (
    <div className="parking-detail p-4 boarder rounded">
      <h2> ID: {id}</h2>
      <p>Status : {status}</p>
      <p>Price : {price}/PLN</p>
      {id_locations.length > 0 ? (
        id_locations.map((space) => (
          <ParkingSpace
            id_locations={space.id_locations}
            lat={space.lat}
            lng={space.lng}
          />
        ))
      ) : (
        <p>No parking space available</p>
      )}
    </div>
  );
};

export default Detail;
