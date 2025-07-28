import React from "react";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../../../App";

const Income = () => {
  const { userData, currentDate, setIsAddCategory } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (!userData?.Income_cato || !Array.isArray(userData.income)) return;

    setLoading(true);

    const fullCato = userData.Income_cato.map((cat) => {
      const total = userData.income.reduce((sum, inc) => {
        const incDate = new Date(inc.date);
        const isSameMonth =
          incDate.getMonth() === currentDate.getMonth() &&
          incDate.getFullYear() === currentDate.getFullYear();

        if (inc.cato === cat.name && isSameMonth) {
          return sum + Number(inc.amount);
        }
        return sum;
      }, 0);

      return {
        cato: cat.name,
        amount: total,
      };
    });

    setCategory(fullCato);
    setLoading(false);
  }, [userData, currentDate]);

  return (
    <div className="w-full h-[90%] flex justify-between flex-col">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Icon icon="line-md:loading-loop" className="w-7 h-7 animate-spin" />
        </div>
      ) : (
        <div className="w-full h-full flex justify-between flex-col">
          <div className="w-full p-4 flex flex-col gap-3 h-[80%] overflow-y-auto">
            {category.map((cato) => (
              <div className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center">
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-2 items-center">
                    <p className="font-bold">{cato.cato}</p>
                  </div>
                  <div className="font-bold text-[#4BC0C0]">${cato.amount}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsAddCategory("Income")}
            className="mt-3 p-3 rounded-lg justify-center font-bold border-[#4BC0C0] border-2  transition-all duration-200 hover:bg-white  hover:text-[#4BC0C0] bg-[#4BC0C0]  text-white w-full"
          >
            Add Income Category
          </button>
        </div>
      )}
    </div>
  );
};

export default Income;
