import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import { appContext } from "../../../App";
import { onSnapshot } from "@firebase/firestore";
const Monthly_summary = () => {
  const { userData, currentDate } = useContext(appContext);
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  function MontlyIncome() {
    if (!userData?.income || !Array.isArray(userData.income)) {
      return;
    }
    const date_arr = userData?.income.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getMonth() === currentDate.getMonth() &&
        itemDate.getFullYear() == currentDate.getFullYear()
      );
    });
    let sum = 0;
    for (let i = 0; i < date_arr.length; i++) {
      sum = sum + date_arr[i].amount;
    }
    setIncome(sum);
  }

  function MontlyExpenses() {
    if (!userData?.expenses || !Array.isArray(userData.expenses)) {
      return;
    }
    const date_arr = userData?.expenses.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getMonth() === currentDate.getMonth() &&
        itemDate.getFullYear() == currentDate.getFullYear()
      );
    });
    let sum = 0;
    for (let i = 0; i < date_arr.length; i++) {
      sum = sum + date_arr[i].amount;
    }
    setExpenses(sum);
  }

  useEffect(() => {
    MontlyIncome();
    MontlyExpenses();
  }, [userData]);
  return (
    <div className="w-full h-full flex flex-col ">
      <h1 className="text-xl font-bold">Monthly Summary</h1>
      <ul className="w-full flex flex-col gap-4 p-2">
        <li className="w-full justify-between flex flex-row">
          <span className="text-black/50">Income</span>
          <span className="text-[#4BC0C0] font-semibold">${income}</span>
        </li>
        <li className="w-full justify-between flex flex-row">
          <span className="text-black/50">Expenses</span>
          <span className="text-[#FF6384] font-semibold">${expenses}</span>
        </li>
      </ul>
      <div className="w-full h-full flex flex-col gap-4 p-2">
        <div className="h-0.5 bg-black/50 w-full"></div>
        <div className="w-full justify-between flex flex-row">
          <span className="text-black/70">Remaining</span>
          <span className="text-[#36A2EB] font-semibold">
            {income - expenses}
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="flex flex-row justify-between items-center">
            <span className="text-black/50">Budget Progress</span>
            <span className="text-[#4BC0C0] font-semibold">
              {Math.round((expenses / income) * 100)}%
            </span>
          </span>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="bg-[#4BC0C0] h-3 rounded-full"
              style={{
                width: `${Math.round((expenses / income) * 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthly_summary;
