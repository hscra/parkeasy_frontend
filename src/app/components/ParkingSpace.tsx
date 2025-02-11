import React from "react";
import { Button, Card, CardContent, Typography, Alert, FormControl } from "@mui/joy";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Input } from "@mui/joy";

export type ParkingSpaceProps = {
  space: number;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
  password: null;
};

const ParkingSpace: React.FC<ParkingSpaceProps> = ({ space }) => {
  const [user, setUser] = React.useState<UserData>({
    id: 0,
    name: "",
    email: "",
    password: null,
  });

  const [feedback, setFeedback] = React.useState<string | null>(null);
  const [reservationDate, setReservationDate] = React.useState<Dayjs | null>(dayjs());

  const reservationRequestValid = (): string | null => {
    if (user.id === 0) return "User not logged in! Please log in to proceed.";
    if (space === 0) return "Parking space not chosen! Please select a space.";
    if (!reservationDate) return "Please select a reservation date.";
    return null;
  };

  const makeReservation = async () => {
    const message = reservationRequestValid();
    if (message) {
      setFeedback(message);
      return;
    }

    try {
      const response = await fetch(process.env.SERVER_DOMAIN + "/reservation/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          parkingSpaceId: space,
          date: reservationDate?.format("YYYY-MM-DD"),
        }),
        credentials: "include",
      });

      const responseText = await response.text();
      switch (response.status) {
        case 200:
          setFeedback("Reservation confirmed! 🎉");
          break;
        case 409:
          setFeedback(`Conflict: ${responseText}`);
          break;
        case 500:
          setFeedback(`Server error: ${responseText}`);
          break;
        default:
          setFeedback(`Unexpected response: ${responseText}`);
          break;
      }
    } catch (error) {
      setFeedback("An error occurred while making the reservation.");
      console.error(error);
    }
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(process.env.SERVER_DOMAIN + "/member/currentUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const text = await response.text();
        if (text !== "") {
          const json = JSON.parse(text) as UserData;
          setUser(json);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Card variant="outlined" className="p-6">
      <CardContent>
        <Typography level="h3" className="mb-4">
          <span className="text-blue-600 bigger00">Parking Space Reservation</span>
        </Typography>

        {/* Parking Space Info */}
        <Typography className="mb-4">
          <strong className="text-blue-700">Selected Parking Space:</strong> {space ? `#${space}` : "None"}
        </Typography>

        {/* User Info */}
        <Typography className="mb-4">
          <strong className="text-blue-800">Current User:</strong>{" "}
          {user.id !== 0 ? `${user.name} (${user.email})` : "Not logged in"}
        </Typography>

        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl className="mb-4">
            <Typography level="body-sm" sx={{ mb: 0.5 }}>
              <strong className="text-blue-800">Reservation Date:</strong>
            </Typography>
            <DatePicker
              value={reservationDate}
              onChange={(newDate) => setReservationDate(newDate)}
              disablePast
              shouldDisableDate={(date) => date.isAfter(dayjs().add(7, "day"))}
              format="DD/MM/YYYY"
            />
          </FormControl>
        </LocalizationProvider>

        {/* Feedback Message */}
        {feedback && (
          <Alert
            variant="soft"
            color={feedback.includes("🎉") ? "success" : "danger"}
            className="mb-4"
          >
            {feedback}
          </Alert>
        )}

        {/* Confirmation Button */}
        <Button
          onClick={makeReservation}
          disabled={user.id === 0 || space === 0 || !reservationDate}
          className="mt-4"
        >
          Confirm Reservation
        </Button>
      </CardContent>
    </Card>
  );
};

export default ParkingSpace;