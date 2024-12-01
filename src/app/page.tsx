import React from "react";
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';
import CardLayout from "./home/page";
import Header from "./components/Logo";



const HomePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <CardLayout />
    </div>
  );
};

export default HomePage;