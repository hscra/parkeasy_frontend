'use client';
import React from "react";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Logout from "@/app/components/Logout";

const Signout: React.FC = () => {
  return (
    <div id="home" className="flex justify-center align-center">
      <Card variant="outlined" color="primary" sx={{ minWidth: 275, minHeight: 50, padding: 2 }}>
        <CardContent>
          <Logout />
        </CardContent>
      </Card>
    </div>
  );
};

export default Signout;
