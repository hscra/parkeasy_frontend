import { Button } from "@mui/joy";
import React from "react";

export type ParkingSpaceProps = {
  space: number;
}

export type UserData = {
  id: number;
  name: string;
  login: string;
  password: null;
}

const ParkingSpace: React.FC<ParkingSpaceProps> = ({space}) => {
  const [user, setUser] = React.useState<UserData>({
    id: 0,
    name: "",
    login: "",
    password: null
  });

  const reservationRequestValid = () => {
    let message = null;

    if (user.id === 0) {
      message = "User not logged in!";
    } else if (space === 0) {
      message = "Space not chosen!";
    }

    return message
  }

  const makeReservation = async () => {
    // Validate prerequisites
    const message = reservationRequestValid()
    if (message) {
      alert(message)
      return;
    }

    // Operate further
    fetch(process.env.SERVER_DOMAIN + "/reservation/create", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        parkingSpaceId: space
      }),
      credentials: 'include'
    })
      .then(async response => {
        let code = response.status;

        switch (code) {
          case 200:
            console.log("Success!");
            break;
          case 409:
            alert(`Data conflict! (${code}) [${await response.text()}]`)
            break;
          case 500:
            alert(`Server error! (${code}) [${await response.text()}]`)
            break;
          default:
            alert(`Unknown response code! (${code}) [${await response.text()}]`)
            break;
        }
      })
      .catch((error) => {
        console.log("/login", error);
      })
  }

  React.useEffect(() => {
    fetch(process.env.SERVER_DOMAIN + "/member/currentUser", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
      .then(async (response) => {
        let text = await response.text()

        if (text !== "") {
          let json = JSON.parse(text) as UserData;
          setUser(json)
        }
      }
    ).catch((error) => {
      console.log('Login error!', error);
    })
  }, [])

  return (
    <>
      {space}<br />
      {JSON.stringify(user)}<br />
      <Button onClick={makeReservation}>Confirm</Button>
    </>
  );
};

export default ParkingSpace;
