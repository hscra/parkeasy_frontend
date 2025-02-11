import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Select,
  MenuItem,
  FormLabel, // Use FormLabel instead of InputLabel
  FormHelperText,
} from "@mui/joy"; // Ensure everything comes from @mui/joy
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ParkingSpace = ({ space }) => {
  const [user, setUser] = React.useState({ id: 0, name: "", email: "", password: null });
  const [feedback, setFeedback] = React.useState(null);
  const [reservationDate, setReservationDate] = React.useState(dayjs());
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [duration, setDuration] = React.useState(1); // Default duration: 1 hour

  const times = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const reservationRequestValid = () => {
    if (user.id === 0) return "User not logged in! Please log in to proceed.";
    if (space === 0) return "Parking space not chosen! Please select a space.";
    if (!reservationDate) return "Please select a reservation date.";
    if (!selectedTime) return "Please select a time slot.";
    if (duration <= 0) return "Please select a valid duration.";
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          parkingSpaceId: space,
          date: reservationDate.format("YYYY-MM-DD"),
          timeSlot: selectedTime,
          duration: duration,
        }),
        credentials: "include",
      });

      const responseText = await response.text();
      setFeedback(response.status === 200 ? "Reservation confirmed! 🎉" : responseText);
    } catch (error) {
      setFeedback("An error occurred while making the reservation.");
    }
  };

  return (
    <Card variant="outlined" className="p-6">
      <CardContent>
        <Typography level="h3" className="mb-4">Parking Space Reservation</Typography>
        <Typography className="mb-4">Selected Parking Space: #{space || "None"}</Typography>
        <Typography className="mb-4">Current User: {user.id !== 0 ? `${user.name} (${user.email})` : "Not logged in"}</Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <FormControl className="mb-4">
            <Typography level="body-sm">Reservation Date:</Typography>
            <DatePicker value={reservationDate} onChange={setReservationDate} disablePast format="DD/MM/YYYY" />
          </FormControl>
        </LocalizationProvider>

        <FormControl fullWidth className="mb-4">
          <FormLabel>Parking Time</FormLabel>
          <Select
            value={duration}
            onChange={(e, newValue) => setDuration(newValue)}
            label="Parking Duration (Hours)"
            fullWidth
          >
            {["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"].map((durationOption) => (
              <MenuItem key={durationOption} value={durationOption}>
                {durationOption} {durationOption > 1 ? "s" : ""}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select the time of your arrival.</FormHelperText>
        </FormControl>
        <FormControl fullWidth className="mb-4">
          <FormLabel>Parking Duration (Hours)</FormLabel>
          <Select
            value={duration}
            onChange={(e, newValue) => setDuration(newValue)}
            label="Parking Duration (Hours)"
            fullWidth
          >
            {[1, 2, 3, 4, 5].map((durationOption) => (
              <MenuItem key={durationOption} value={durationOption}>
                {durationOption} hour{durationOption > 1 ? "s" : ""}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select the duration of your parking.</FormHelperText>
        </FormControl>

        {feedback && <Alert color={feedback.includes("🎉") ? "success" : "danger"}>{feedback}</Alert>}

        <Button onClick={makeReservation} disabled={!user.id || !space || !reservationDate || !selectedTime || duration <= 0}>
          Confirm Reservation
        </Button>
      </CardContent>
    </Card>
  );
};

export default ParkingSpace;