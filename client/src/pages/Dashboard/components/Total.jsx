import React, { use, useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";

const Total = () => {
  const { userData } = useContext(appContext);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalDebts, setTotalDebts] = useState(0);
  function calculateTotalAssets() {
    let sum = 0;
    userData?.payment.map((item) => {
      sum += Number(item.amount);
    });
    return sum;
  }
  function calculateTotalDebts() {
    let sum = 0;
    userData?.expenses.map((item) => {
      sum += Number(item.amount);
    });
    return sum;
  }
  useEffect(() => {
    if (userData?.payment) {
      setTotalAssets(calculateTotalAssets());
      setTotalDebts(calculateTotalDebts());
    }
  }, [userData]);
  return (
    <div className="w-full h-full justify-center items-center text-white flex flex-col gap-2">
      <div className="w-full">
        <h1 className="text-2xl font-bold">{userData?.userName}</h1>
        <span className="">Manage Finance with your AI assistant!</span>
      </div>
      <div className="w-[80%] h-full flex flex-row justify-between items-center ">
        <div>
          <h1>Total Assests</h1>
          <p className="text-3xl font-bold">${totalAssets + totalDebts}</p>
        </div>
        <div>
          <h1>Total Debts</h1>
          <p className="text-3xl font-bold">${totalDebts}</p>
        </div>
        <div>
          <h1>Net Worth</h1>
          <p className="text-3xl font-bold">${totalAssets}</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
