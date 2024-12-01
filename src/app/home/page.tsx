import React from "react";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-[120px] p-4">
        <div className="grid gap-4">
          <div className="bg-gray-200 h-64 rounded-md"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-gray-200 h-64 rounded-md"></div>
            <div className="bg-gray-200 h-64 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
