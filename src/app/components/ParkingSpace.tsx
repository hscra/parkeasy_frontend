import React from "react";

export type ParkingSpaceProps = {
  space: number;
}

const ParkingSpace: React.FC<ParkingSpaceProps> = ({space}) => {
  return (
    <>
      {space}
    </>
  );
};

export default ParkingSpace;
