import React, { useEffect } from "react";
import Monthly_summary from "./components/Monthly_summary";
import Monthly_graph from "./components/Monthly_graph";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Recent_Transactions from "./components/Recent_Transactions";
import Standing_Order from "./components/Standing_Order";

const Budget = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-1">
      <div className="w-full h-[40%] flex flex-row gap-3">
        <div className="w-[30%] h-[100%] bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
          <Monthly_summary />
        </div>
        <div className="w-[70%] h-[100%] bg-white p-4 rounded-lg shadow-md flex flex-col justify-center ">
          <h1 className="text-xl font-bold">Daily Income and Expenses</h1>
          <Monthly_graph />
        </div>
      </div>
      <div className="w-full h-[60%] flex flex-row gap-3">
        <div className=" w-[50%] h-[100%] bg-white p-4 rounded-lg shadow-md flex flex-col">
          <Income />
        </div>
        <div className=" w-[50%] h-[100%] bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
          <Expenses />
        </div>
      </div>
      <div className="w-full h-[40%] rounded-lg flex flex-row gap-3">
        <div className="w-[50%] h-full bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-bold">Recent Transactions</h1>
          <Recent_Transactions />
        </div>
        <div className="w-[50%] h-full bg-white p-4 rounded-lg shadow-md">
          <Standing_Order />
        </div>
      </div>
    </div>
  );
};

export default Budget;
