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

  const makeRegistration = async () => {
    let body = JSON.stringify({
      userId: user.id,
      parkingSpaceId: space
    })
    console.log(body)

    fetch(process.env.SERVER_DOMAIN + "/reservation/create", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
      credentials: 'include'
    })
      .then(async response => {
        let code = response.status;

        switch (code) {
          case 200:
            console.log("Success!");
            break;
          case 409:
            alert(`Data conflict! Message: [${await response.text()}]`)
            break;
          case 500:
            throw new Error(`Server error! (${code}) [${await response.text()}]`);
          default:
            throw new Error(`Unknown response code: (${code}) [${await response.text()}]`)
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
      {JSON.stringify(user)}
      <Button onClick={makeRegistration}>Confirm</Button>
    </>
  );
};

export default ParkingSpace;
