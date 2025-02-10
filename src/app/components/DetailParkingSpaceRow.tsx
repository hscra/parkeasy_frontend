import React from "react";

export type DetailParkingSpaceRowProps = {
  id: number;
  city_id: number;
  availability: boolean;
  price: number;
  onClick: (id: number) => void
}

const DetailParkingSpaceRow: React.FC<DetailParkingSpaceRowProps> = ({id, city_id, availability, price, onClick}) => {
  return (
    <tr key={id} onClick={() => onClick(id)} className="cursor-pointer">
      <td>{id}</td>
      <td>{city_id}</td>
      <td>{(availability).toString()}</td>
      <td>{price}</td>
    </tr>
  );
};

export default DetailParkingSpaceRow;
