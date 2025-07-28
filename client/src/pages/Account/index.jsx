import React, { useContext } from "react";
import Accounts from "./components/Accounts";
import Goal from "./components/Goal";
import { appContext } from "../../App";
import Income from "./components/Income";
import Expenses from "./components/Expenses";

const Account = () => {
  const { setIsAddPayment, isAddPayment } = useContext(appContext);
  return (
    <div className="min-h-full bg-gray-100 py-3 px-4 space-y-7">
      <div className="p-4 rounded-lg shadow-md w-full bg-white h-[50%]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-bold pl-1">Your Accounts</h1>{" "}
          <button
            onClick={() => {
              setIsAddPayment(true);
            }}
            className="bg-[#4BC0C0] border-2 border-[#4BC0C0] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#4BC0C0] font-bold transition-all duration-200"
          >
            Add Account
          </button>
        </div>
        <Accounts />
      </div>
      <div className="p-4 rounded-lg shadow-md w-full bg-white h-[50%]">
        <Goal />
      </div>
      <div className="rounded-lg w-full  max-h-[30%] flex flex-row gap-3">
        <div className="w-[50%]  h-80 bg-white p-4 rounded-lg shadow-md flex flex-col">
          <h1 className="text-xl font-bold pl-1">Income Category</h1>
          <Income />
        </div>
        <div className="w-[50%] h-80 overflow-hidden bg-white p-4 rounded-lg shadow-md flex flex-col">
          <h1 className="text-xl font-bold pl-1">Expenses Category</h1>
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default Account;
