import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Password from './Password';
import { useState } from 'react';
import { useRouter } from "next/navigation";

const Registration: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

      // Secondary safety switch for the logged in user
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
            let json = JSON.parse(text); // We can work on user data here
            router.push("/")
          }
        }
      ).catch((error) => {
        console.log('Login error!', error);
      })
    }, [])

    const registration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as FormData).entries());

        fetch(process.env.SERVER_DOMAIN + "/member/save", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formJson),
          credentials: 'include'
        })
          .then(async (response) => {
            let code = response.status;

            switch (code) {
              case 200:
                console.log("Success! Redirecting...", await response.text());
                router.push("/")
                break;
              case 409:
                alert(`Data conflict! ${await response.text()}`)
                break;
              default:
                throw new Error(`Unknown response code: ${code} [${await response.text()}]`)
            }
          })
          .catch((error) => {
            console.log("/save - unknown error", error);
          })
      }
  return (
    <form
      onSubmit={(e) => registration(e)}
    >
      <Stack spacing={1.5}>
        <Input type="username" name="name" placeholder="Username" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Password />
        <Button type="submit">Join</Button>
      </Stack>
    </form>
  );
}

export default Registration;