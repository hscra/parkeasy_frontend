import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();

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

        if (text === "") {
          console.log("User not logged in!");
          router.push("/");
        }
      }
    ).catch((error) => {
      console.log('caught it!', error);
    })
  }, [])

  const logout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch(process.env.SERVER_DOMAIN + "/member/logout", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) })
        }
        console.log("User successfully logged out!")
        router.push("/")
      })
      .catch((error) => {
        console.log("Logout error!", error)
      })
  }

  return (
    <form onSubmit={(e) => logout(e)}>
      <Stack spacing={1}>
        <Button type="submit">Log Out</Button>
      </Stack>
    </form>
  );
}

export default Login;