import React from "react";
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
const Net_worth_trend = ({ income, expenses }) => {
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
  function calculateNetWorth(income, expenses) {
    if (!income || !expenses) return [];
    return income.map((inc, index) => inc - (expenses[index] || 0));
  }
  const data = {
    labels: months({ count: currentMonth }),
    datasets: [
      {
        label: "Net Worth",
        data: calculateNetWorth(income, expenses),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
      className="w-full h-[80%]"
    />
  );
};

export default Net_worth_trend;
