import React from "react";

export type ParkingSpaceProps = {
  id_locations: number;
  lat: number;
  lng: number;
};

const ParkingSpace: React.FC = () => {
  return (
    // <div className={`parking-space ${statusStyle} p-4 border rounded`}>
    <div>
      elo żelo
      {/* <h4>Parking Space ID : {id_locations}</h4>
      <p>{lat}</p>
      <p>{lng}</p> */}
    </div>
  );
};

export default ParkingSpace;
