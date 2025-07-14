import React, { use, useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { appContext } from "../../../App";
import { doc, onSnapshot } from "@firebase/firestore";
import { firestore } from "../../../../firebase";

const Monthly_graph = () => {
  const day = new Date().getDate();
  const { userData, uid, currentDate } = useContext(appContext);
  const [grapData, setGraphData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!uid) return;

    const unsubscribe = onSnapshot(doc(firestore, "user", uid), (docSnap) => {
      if (docSnap.exists()) {
        const income = docSnap.data()?.income || [];
        const expenses = docSnap.data()?.expenses || [];
        let Income_dateArr = new Array(day).fill(0);
        let Expenses_dateArr = new Array(day).fill(0);
        expenses.forEach((item) => {
          const itemDate = new Date(item.date);
          if (
            itemDate.getMonth() === currentDate.getMonth() &&
            itemDate.getFullYear() === currentDate.getFullYear() &&
            itemDate.getDate() <= day
          ) {
            Expenses_dateArr[itemDate.getDate() - 1] += item.amount;
          }
        });
        income.forEach((item) => {
          const itemDate = new Date(item.date);
          if (
            itemDate.getMonth() === currentDate.getMonth() &&
            itemDate.getFullYear() === currentDate.getFullYear() &&
            itemDate.getDate() <= day
          ) {
            Income_dateArr[itemDate.getDate() - 1] += item.amount;
          }
        });

        const data = {
          labels: Array.from({ length: day }, (_, i) => i + 1),
          datasets: [
            {
              label: "Daily Income",
              data: Income_dateArr,
              borderColor: "#4BC0C0",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
            {
              label: "Daily Expenses",
              data: Expenses_dateArr,
              borderColor: "#FF6384",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              fill: true,
            },
          ],
        };

        setGraphData(data);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [uid, currentDate, day]);

  return (
    <Line
      data={grapData}
      options={{ responsive: true, maintainAspectRatio: false }}
      className="w-full h-full"
    />
  );
};

export default Monthly_graph;
