import React from "react";

const CardLayout: React.FC = () => {
  return (
    <div className="pt-[150px] min-h-screen bg-gray-50">
      <div className="grid gap-6 p-6">
        <div className="bg-gray-200 h-[700px] rounded-lg"></div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-gray-200 h-[500px] rounded-lg"></div>
          <div className="col-span-1 bg-gray-200 h-[500px] rounded-lg"></div> 
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
