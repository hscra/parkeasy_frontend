import React, { useEffect } from "react";
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export type ParkingDetailsProps = {
  id_location: number;
};
export type ParkingSpace = {
  id: number;
  city_id: number;
  availability: boolean;
}

const Detail: React.FC<ParkingDetailsProps> = ({id_location}) => {
  const [parkingSpaces, setParkingSpaces] = React.useState<ParkingSpace[]>([])

  const fetchParkingSpaces = async () => {
    if (id_location === 0) return;

    const apiUrl = "http://localhost:8080/parking/getAllInCity?Id=" + id_location;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data)

      setParkingSpaces(data.map((el: any) => {
        return {
          id: el.id,
          city_id: el.city_Id,
          availability: el.availability,
        } as ParkingSpace
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
              <tr key={ps.id}>
                <td>{ps.id}</td>
                <td>{ps.city_id}</td>
                <td>{(ps.availability).toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
};

export default Detail;
