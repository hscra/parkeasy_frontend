import React from "react";

export type ParkingSpaceProps = {
  id_locations: number;
  lat: number;
  lng: number;
};

const ParkingSpace: React.FC<ParkingSpaceProps> = ({
  id_locations,
  lat,
  lng,
}) => {
  return (
    // <div className={`parking-space ${statusStyle} p-4 border rounded`}>
    <div>
      <h4>Parking Space ID : {id_locations}</h4>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
};

export default ParkingSpace;
