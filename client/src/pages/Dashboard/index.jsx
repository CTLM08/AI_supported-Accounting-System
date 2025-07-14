import React from "react";
import Net_worth_trend from "./components/Net_worth_trend";
import Income_Expenses from "./components/Income_Expenses";
import Spending_category from "./components/Spending_category";
import Total from "./components/Total";
import Statics from "./components/Statics";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";

const Dashboard = () => {
  const { userData, currentDate } = useContext(appContext);
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  function MonthlyIncome() {
    if (!userData?.income || !Array.isArray(userData.income)) {
      return;
    }
    let month_arr = new Array(12).fill(0);
    for (let i = 0; i < userData.income.length; i++) {
      const itemDate = new Date(userData.income[i].date);
      if (itemDate.getFullYear() === currentDate.getFullYear()) {
        month_arr[itemDate.getMonth()] += Number(userData.income[i].amount);
      }
    }
    setIncome(month_arr);
  }
  function MonthlyExpenses() {
    if (!userData?.expenses || !Array.isArray(userData.expenses)) {
      return;
    }
    let month_arr = new Array(12).fill(0);
    for (let i = 0; i < userData.expenses.length; i++) {
      const itemDate = new Date(userData.expenses[i].date);
      if (itemDate.getFullYear() === currentDate.getFullYear()) {
        month_arr[itemDate.getMonth()] += Number(userData.expenses[i].amount);
      }
    }
    setExpenses(month_arr);
  }
  useEffect(() => {
    MonthlyIncome();
    MonthlyExpenses();
  }, [userData, currentDate]);
  return (
    <div className="h-[100%] w-full flex flex-col gap-4 p-1">
      <div className="w-full h-[25%] bg-[#4BC0C0] p-4 rounded-lg shadow-md flex justify-center items-center">
        <Total />
      </div>
      <div className="w-full h-[65%] p-6 bg-white flex flex-col rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Net Worth Trend</h1>
        <Net_worth_trend income={income} expenses={expenses} />
      </div>
      <div className="w-full h-[55%] p-4 flex-row bg-white flex justify-center items-center rounded-lg shadow-md">
        <div className="w-[50%] h-full p-4 flex flex-col">
          <h1 className="text-xl font-bold">Income & Expenses</h1>
          <Income_Expenses income={income} expenses={expenses} />
        </div>
        <div className="w-[50%] h-full p-4 flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold flex-1">Spending Category</h1>
          <Spending_category />
        </div>
      </div>
      <div className="w-full h-[40%] p-4 flex-row bg-white flex justify-center items-center rounded-lg shadow-md">
        <Statics />
      </div>
    </div>
  );
};

export default Dashboard;
