// pages/index.tsx
import React from "react";
import Rectangle from "@/app/components/Rectangle";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Rectangle width="w-48" height="h-24" color="bg-red-500" />
    </div>
  );
};

export default HomePage;