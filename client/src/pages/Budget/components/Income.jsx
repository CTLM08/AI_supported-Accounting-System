import React, { useState, useContext, useEffect } from "react";
import { appContext } from "../../../App";

const Income = () => {
  const { SetIsAdd, SetFront, userData } = useContext(appContext);
  const [incomeList, setIncomeList] = useState([]);
  useEffect(() => {
    // Fetch income data from userData or any other source
    if (userData?.income && Array.isArray(userData.income)) {
      setIncomeList(userData.income);
      // Sort the income by date
      setIncomeList((prev) =>
        [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, [userData]);
  return (
    <div className="w-full h-full flex justify-between flex-col">
      <div className="text-xl font-bold">Income</div>
      <div className="w-full p-4 flex flex-col gap-3 h-[70%] overflow-y-auto">
        {incomeList.map((income) => (
          <button
            key={income.id}
            className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center"
          >
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold">{income.cato}</p>
                <p className="text-sm text-black/50">{income.date}</p>
              </div>
              <div className="font-bold text-[#4BC0C0]">${income.amount}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          SetFront(true);
          SetIsAdd("Income");
        }}
        className="mt-3 p-3 rounded-lg justify-center font-bold border-[#4BC0C0] border-2  transition-all duration-200 hover:bg-white  hover:text-[#4BC0C0] bg-[#4BC0C0]  text-white w-full"
      >
        Add Income
      </button>
    </div>
  );
};

export default Income;
