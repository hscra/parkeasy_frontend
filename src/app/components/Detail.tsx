import React, { useEffect } from "react";
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import DetailParkingSpaceRow from "../components/DetailParkingSpaceRow";

export type ParkingDetailsProps = {
  id_location: number;
  selectSpace: (id: number) => void;
};
export type ParkingSpaceDataItem = {
  id: number;
  city_id: number;
  availability: boolean;
}

const Detail: React.FC<ParkingDetailsProps> = ({id_location, selectSpace}) => {
  const [parkingSpaces, setParkingSpaces] = React.useState<ParkingSpaceDataItem[]>([])

  const fetchParkingSpaces = async () => {
    if (id_location === 0) return;

    const apiUrl = process.env.SERVER_DOMAIN + "/parking/getAllInCity?Id=" + id_location;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setParkingSpaces(data.map((el: any) => {
        return {
          id: el.id,
          city_id: el.city_Id,
          availability: el.availability,
        } as ParkingSpaceDataItem
      }))
    } catch (error) {
      console.error("Error to fetching location data", error);
    }
  }

  useEffect(() => {
    fetchParkingSpaces()
  }, [id_location])

  return (
    <>
      <Sheet>
        <Table
        borderAxis="xBetween"
        color="primary"
        size="lg"
        stickyFooter
        stickyHeader
        variant="soft"
        >
          <thead>
            <tr>
              <th>Row (id)</th>
              <th>city_id</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {parkingSpaces.map((ps) => (
              <DetailParkingSpaceRow
                key={ps.id}
                id={ps.id}
                city_id={ps.city_id}
                availability={ps.availability}
                onClick={() => selectSpace(ps.id)}
              />
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
};

export default Detail;