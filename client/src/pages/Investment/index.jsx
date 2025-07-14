import React from "react";
import Stock from "./components/Stock";

const Investment = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-1">
      <div className="w-full h-[50%] bg-white p-4 rounded-lg shadow-md">
        <Stock />
      </div>
    </div>
  );
};

export default Investment;
