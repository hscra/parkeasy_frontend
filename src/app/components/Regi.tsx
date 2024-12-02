import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Password from './Password';
import { useState } from 'react';

const Regi: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={1.5}>
        <Input type="username" placeholder="Username" required />
        <Input type="email" placeholder="Email" required />
        <Password />
        <Button type="submit">Join</Button>
      </Stack>
    </form>
  );
}

export default Regi;