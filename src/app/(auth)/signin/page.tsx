'use client';
import React from "react";
import { TextField, Button, Input } from "@mui/joy";
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Image from 'next/image';
import Logo from '../../public/logo.jpg';
import PasswordMeterInput from "@/app/components/Password";
import EmailFormProp from "@/app/components/Regi";
import EmailFormPropLogin from "@/app/components/Logi";

const Login: React.FC = () => {
  return (
    <div id="home" className="flex justify-center align-center">
    <Card variant="outlined" color="primary" sx={{ minWidth: 275, minHeight: 200, padding: 2 }}>
      <CardContent>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20, textAlign: "justify"}}>ParkEasy</Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize:20, textAlign: "justify"}}>Sign In</Typography>

        {/* <Input color="neutral" placeholder="email" variant="soft"/> */}

        <EmailFormPropLogin />
        {/* <TextField sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 57}} id="email" label="Email" variant="outlined" type="email"/> */}

        <Typography sx={{ color: 'text.secondary', fontSize: 12, textAlign: "justify"}} ><a href="/login">Don't have an account yet?</a> <Link href="/signup">Register Now!</Link></Typography>
      </CardContent>
      {/* <CardActions>
        <Button variant="outlined" color="primary" type = "submit">
          Sign Up
        </Button>
      </CardActions> */}
    </Card>
  </div>
  );
};

export default Login;
