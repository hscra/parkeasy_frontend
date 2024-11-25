import React from "react";
import { TextField, Button, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Login: React.FC = () => {
  return (
    <div id="home" className="flex justify-center align-center">
      <Card sx={{ minWidth: 150, minHeight: 200, padding: 2 }}>
      <CardContent>
      <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 24}} align="justify">Welcome Back!</Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20}} align="justify">Sign In</Typography>
          <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 57}} id="email" label="Email" variant="outlined" type="email"/>
          <br/>
          <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 57}} id="password" label="Password" variant="outlined" type="password"/>
          <br/>
          <Typography sx={{ color: 'text.secondary', fontSize: 12}} align="justify"><a href="/login">Don't have an account yet?</a> <Link href="/signup">Register Now!</Link></Typography>
      </CardContent>
      <CardActions>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
      </CardActions>
      </Card>
    </div>
  );
};

export default Login;
