import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import PasswordMeterInput from './Password';

export default function EmailFormProp() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        alert(JSON.stringify(formJson));
      }}
    >
    <Stack spacing={1}>
        <Input placeholder="Email" required />
        <PasswordMeterInput/>
        <Button type="submit">Submit</Button>
    </Stack>
    </form>
  );
}
