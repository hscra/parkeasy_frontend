import React from "react";
import { ParkingSpaceDataItem } from "./Detail";

export type DetailParkingSpaceRowProps = {
  id: number;
  city_id: number;
  availability: boolean;
  onClick: (id: number) => void
}

const DetailParkingSpaceRow: React.FC<DetailParkingSpaceRowProps> = ({id, city_id, availability, onClick}) => {
  return (
    <tr key={id} onClick={() => onClick(id)}>
      <td>{id}</td>
      <td>{city_id}</td>
      <td>{(availability).toString()}</td>
    </tr>
  );
};

export default DetailParkingSpaceRow;
