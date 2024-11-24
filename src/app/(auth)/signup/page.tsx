import React from "react";
import { TextField, Button, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Register: React.FC = () => {
  return (
    <div id="home" className="flex justify-center align-center">
      <Card sx={{ minWidth: 275, minHeight: 200, padding: 2 }}>
      <CardContent>
      <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20}} align="justify">Sign Up</Typography>
          <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}} id="username" label="Username" variant="outlined" type="username"/>
          <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}} id="email" label="Email" variant="outlined" type="email"/>
          <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}id="password" label="Password" variant="outlined" type="password" />
          <Typography sx={{ color: 'text.secondary', fontSize: 12}} align="justify"><a href="/login">Already have an account?</a> <Link href="/signin">Log In!</Link></Typography>
      </CardContent>
      <CardActions>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
      </CardActions>
      </Card>
    </div>
  );
};

export default Register;
