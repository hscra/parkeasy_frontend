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
      <div className="pt-[150px] min-h-screen bg-gray-50">
        <div className="grid gap-6 p-6">
          <div className="bg-gray-200 h-[700px] rounded-lg"></div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-200 h-[500px] rounded-lg"></div>
            <div className="col-span-1 bg-gray-200 h-[500px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;