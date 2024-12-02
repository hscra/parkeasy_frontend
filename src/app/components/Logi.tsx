import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { FormEvent } from 'react';

const Logi: React.FC = () => {
  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as FormData).entries());

    fetch("http://localhost:8080/member/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(newUserData => {
        // Process the newly created user data
        console.log('New User Data:', newUserData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
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

export default Logi;