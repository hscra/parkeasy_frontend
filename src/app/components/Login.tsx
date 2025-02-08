import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useRouter } from "next/navigation";
import { useCache } from '../cache/CacheProvider';

const Login: React.FC = () => {
  const { setLoggedIn } = useCache();
  const router = useRouter();

  React.useEffect(() => {
    // This could be later substituted with a call to nextJS API of checking session status
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

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as FormData).entries());
    console.log("form json", formJson);

    fetch("/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
      credentials: 'include'
    })
      .then(async response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) })
        }
        setLoggedIn(true)
        router.push("/")
      })
      .catch((error) => {
        console.log("/login", error);
      }
    )

    // fetch(process.env.SERVER_DOMAIN + "/member/login", {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formJson),
    //   credentials: 'include'
    // })
    //   .then(async response => {
    //     if (!response.ok) {
    //       return response.text().then(text => { throw new Error(text) })
    //     }
    //     setLoggedIn(true)
    //     router.push("/")
    //   })
    //   .catch((error) => {
    //     console.log("/login", error);
    //   })
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