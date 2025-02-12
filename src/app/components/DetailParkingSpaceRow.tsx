import React from "react";

export type DetailParkingSpaceRowProps = {
  id: number;
  city_id: number;
  city_name: string;
  availability: boolean;
  price: number;
  onClick: (id: number) => void
}

const DetailParkingSpaceRow: React.FC<DetailParkingSpaceRowProps> = ({id, city_id, city_name, availability, price, onClick}) => {
  return (
    <tr key={id} onClick={() => onClick(id)} className="cursor-pointer">
      <td>{id}</td>
      <td>{city_name}</td>
      <td>{(availability).toString()}</td>
      <td>{price}</td>
    </tr>
  );
};

export default DetailParkingSpaceRow;
