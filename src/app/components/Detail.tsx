import React from "react";
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export type ParkingDetailsProps = {
  id_location: number;
};

const Detail: React.FC<ParkingDetailsProps> = ({id_location}) => {
    // const fetchLocationDetails = async (ids: number[]): Promise<ParkingDetailsProps[]> => {
    //   try {
    //     const detailPromises = ids.map(async (id) => {
    //       const response = await fetch(
    //         `http://localhost:8080/locations/get?Id=${id}`,
    //         {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           credentials: "include",
    //         }
    //       );
    //       if (!response.ok) {
    //         throw new Error(
    //           `Failed to fetch details for location ${id}: ${response.statusText}`
    //         );
    //       }
    //       const rawData = await response.json();
    //       return rawData;
    //     });
    //     return Promise.all(detailPromises);
    //   } catch (err: any) {
    //     setError(err.message || "Failed to fetch location details");
    //     return [];
    //   }
    // }

  return (
    <>
      {id_location}
      <Sheet>
        <Table
        borderAxis="xBetween"
        color="primary"
        size="lg"
        stickyFooter
        stickyHeader
        variant="soft"
      />
      </Sheet>
    </>
  );
};

export default Detail;
