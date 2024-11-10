import React from "react";

type RectangleProps = {
  width?: string;
  height?: string;
  color?: string;
};

const Rectangle: React.FC<RectangleProps> = ({ width = "w-32", height = "h-16", color = "bg-blue-500" }) => {
  return <div className={`${width} ${height} ${color}`}></div>;
};

export default Rectangle;