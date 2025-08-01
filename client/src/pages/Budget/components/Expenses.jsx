import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { appContext } from "../../../App";
//same as Add_Expenses.jsx
const Expenses = () => {
  const { SetIsAdd, SetFront, userData } = useContext(appContext);
  const [ExpensesList, setExpensesList] = useState([]);
  useEffect(() => {
    // Fetch expenses data from userData or any other source
    if (userData?.expenses && Array.isArray(userData.expenses)) {
      setExpensesList(userData.expenses);
      //sort the expenses by date
      setExpensesList((prev) =>
        [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, [userData]);
  return (
    <div className="w-full h-full flex justify-between flex-col">
      <div className="text-xl font-bold">Expenses</div>
      <div className="w-full p-4 flex flex-col gap-3 h-[70%] overflow-y-auto">
        {ExpensesList.map((Expenses) => (
          <button
            key={Expenses.id}
            className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center"
          >
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold">{Expenses.cato}</p>
                <p className="text-sm text-black/50">{Expenses.date}</p>
              </div>
              <div className="font-bold text-[#FF6384]">${Expenses.amount}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          SetFront(true);
          SetIsAdd("Expenses");
        }}
        className="mt-3 p-3 rounded-lg justify-center font-bold border-[#FF6384] border-2  transition-all duration-200 hover:bg-white  hover:text-[#FF6384] bg-[#FF6384]  text-white w-full"
      >
        Add Expenses
      </button>
    </div>
  );
};

export default Expenses;
