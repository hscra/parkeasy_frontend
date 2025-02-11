import React, { useEffect, useState } from "react";
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import DetailParkingSpaceRow from "./DetailParkingSpaceRow";
import { Button } from "@mui/joy";

export type ParkingDetailsProps = {
  id_location: number;
  selectSpace: (id: number) => void;
};

export type ParkingSpaceDataItem = {
  id: number;
  city_id: number;
  availability: boolean;
  price: number;
};

const Detail: React.FC<ParkingDetailsProps> = ({ id_location, selectSpace }) => {
  const [parkingSpaces, setParkingSpaces] = useState<ParkingSpaceDataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

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
          price: el.price,
        } as ParkingSpaceDataItem;
      }));
    } catch (error) {
      console.error("Error fetching location data", error);
    }
  };

  useEffect(() => {
    fetchParkingSpaces();
  }, [id_location]);

  const totalPages = Math.ceil(parkingSpaces.length / pageSize);
  const paginatedSpaces = parkingSpaces.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSpaces.map((ps) => (
              <DetailParkingSpaceRow
                key={ps.id}
                id={ps.id}
                city_id={ps.city_id}
                availability={ps.availability}
                price={ps.price}
                onClick={() => selectSpace(ps.id)}
              />
            ))}
          </tbody>
        </Table>
      </Sheet>

      <div className="flex justify-between mt-4">
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Detail;