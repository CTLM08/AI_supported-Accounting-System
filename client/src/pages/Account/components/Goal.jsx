import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";
import { Icon } from "@iconify/react/dist/iconify.js";
import { doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../../firebase";

const Goal = () => {
  const { setIsAddGoal, userData, uid } = useContext(appContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    if (userData) setGoals(userData?.goals);
  }, [userData]);
  function finish(updatedGoal) {
    updateDoc(doc(firestore, "user", uid), {
      goals: updatedGoal,
    });
  }
  const deleteGoal = (name) => {
    console.log("yaya");
    const updated = goals.filter((_goal, i) => _goal.name != name);
    finish(updated);
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800 pl-1">
          Financial Goals
        </h2>
        <button
          onClick={() => setIsAddGoal(true)}
          className="bg-[#4BC0C0] border-2 border-[#4BC0C0] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#4BC0C0] font-bold transition-all duration-200"
        >
          Add Goals
        </button>
      </div>

      <div className=" p-4 space-y-3 flex flex-col gap-3 pt-1 overflow-auto h-96">
        {goals.map((goal, index) => (
          <div key={index} className=" hover:bg-gray-100 p-3 rounded-lg ">
            <div className="flex justify-between  items-center flex-row h-full">
              <div className="flex flex-col w-[90%] gap-1">
                <div className="font-bold text-black text-lg">{goal.name}</div>
                <div className="text-base text-black/70">$ {goal.amount}</div>
              </div>
              <div className="flex flex-row w-[10%] items-center h-full justify-center gap-2">
                {goal.finish ? (
                  <div className="text-[#4BC0C0] flex flex-row items-center gap-2 font-semibold">
                    <h1>Finished</h1>
                    <Icon icon="ix:success" className="w-7 h-7" />
                  </div>
                ) : (
                  <div className="flex flex-row w-full items-center h-full justify-center gap-2">
                    <button
                      onClick={() => {
                        goal.finish = true;
                        finish(goals);
                      }}
                      className="bg-[#4BC0C0] border-2  border-[#4BC0C0] w-full text-white px-3 py-1 rounded text-base transition-all hover:bg-gray-100 hover:text-[#4BC0C0] "
                    >
                      Done
                    </button>
                    <button>
                      <Icon
                        onClick={() => {
                          deleteGoal(goal.name);
                        }}
                        icon="material-symbols:delete-outline"
                        className=" h-7 w-7 text-[#FF6384]"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
