import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  return (
    <div id="home" className="flex justify-center align-center">
      <h1 className="justify-center align-center">Sign Up</h1>
      <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </div>
      <div className="position-fixed">
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  );
};

export default Register;
