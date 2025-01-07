import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
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
      .then(async response => {
        if (!response.ok) {
          let message = await response.text();

          switch (message) {
            case "User already logged in":
              window.alert(message + "!");
              break;
            default:
              throw new Error(message);
          }
        }
      })
      .then(() => {
        router.push("/")
      })
  }, [])

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as FormData).entries());

    fetch(process.env.SERVER_DOMAIN + "/member/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) })
        }
      })
      .then(() => {
        router.push("/")
      })
  }

  return (
    <form onSubmit={(e) => login(e)}>
      <Stack spacing={1}>
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Log In</Button>
      </Stack>
    </form>
  );
}

export default Login;