import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // 👈 Add this
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // 👈 And this
  Tooltip,
  Legend
);

import { Bar, Line } from "react-chartjs-2";
const Income_Expenses = ({ income, expenses }) => {
  const currentMonth = new Date().getMonth() + 1;
  function months({ count }) {
    const months = [];
    for (let i = 0; i < count; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - (count - i - 1));
      months.push(date.toLocaleString("en-US", { month: "short" }));
    }
    return months;
  }
  const data = {
    labels: months({ count: currentMonth }),
    datasets: [
      {
        label: "Income",
        data: income,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Expenses",
        data: expenses,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  return <Bar data={data} />;
};

export default Income_Expenses;
