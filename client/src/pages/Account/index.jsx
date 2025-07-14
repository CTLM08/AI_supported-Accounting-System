import React, { useContext } from "react";
import Accounts from "./components/Accounts";
import Goal from "./components/Goal";
import { appContext } from "../../App";

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
    </div>
  );
};

export default Account;
