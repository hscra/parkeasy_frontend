import React from "react";
import { ParkingSpaceDataItem } from "./Detail";

const DetailParkingSpaceRow: React.FC<ParkingSpaceDataItem> = ({id, city_id, availability}) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{city_id}</td>
      <td>{(availability).toString()}</td>
    </tr>
  );
};

export default DetailParkingSpaceRow;
