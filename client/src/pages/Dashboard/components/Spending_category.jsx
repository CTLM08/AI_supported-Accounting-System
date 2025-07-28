import React, { use, useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement, // 👈 This line is essential
  Tooltip,
  Legend,
} from "chart.js";
import { appContext } from "../../../App";

ChartJS.register(
  ArcElement, // 👈 Register this!
  Tooltip,
  Legend
);

const Spending_category = () => {
  const { userData, currentDate } = useContext(appContext);
  const [cato, setCato] = useState([]);
  const [loading, setLoading] = useState(true);
  function updateCato() {
    if (!Array.isArray(userData?.Expenses_cato)) return;
    const updated = userData.Expenses_cato.map((item) => ({
      cato: item,
      amount: 0,
    }));
    console.log(updated);
    setCato(updated);
  }
  const [hasCalculated, setHasCalculated] = useState(false);
  // useEffect(() => {
  //   if (!userData || !userData.Expenses_cato || !userData.expenses) return;
  //   setLoading(true);
  //   updateCato();
  //   setHasCalculated(false);
  // }, [userData]);
  // useEffect(() => {
  //   if (hasCalculated) return;
  //   calculateTotalSpending();
  //   setLoading(false);
  //   setHasCalculated(true);
  // }, [cato]);
  useEffect(() => {
    // skip if not ready
    if (
      !userData?.Expenses_cato ||
      !userData?.expenses ||
      !Array.isArray(userData.Expenses_cato) ||
      !Array.isArray(userData.expenses)
    )
      return;

    setLoading(true);

    const fullCato = userData.Expenses_cato.map((cat) => {
      const total = userData.expenses.reduce((sum, exp) => {
        console.log(cat.name);
        const expDate = new Date(exp.date);
        if (
          exp.cato === cat.name &&
          expDate.getMonth() === currentDate.getMonth() &&
          expDate.getFullYear() === currentDate.getFullYear()
        ) {
          return sum + Number(exp.amount);
        }
        return sum;
      }, 0);

      return {
        cato: cat.name,
        amount: total,
        colour: cat.colour,
      };
    });

    setCato(fullCato);
    setLoading(false);
  }, [userData, currentDate]); // <— make sure these are in deps

  //calculate the total spending for each category

  const data = {
    labels: cato.map((item) => item.cato),
    datasets: [
      {
        data: cato.map((item) => item.amount),
        backgroundColor: cato.map((item) => item.colour),
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <Doughnut data={data} />
        )}
      </>
    </div>
  );
};

export default Spending_category;
