import React from "react";

const Goal = () => {
  const goals = [
    {
      name: "House",
      amount: "RM 300,000",
      status: "You can’t buy it!",
    },
    {
      name: "Car",
      amount: "RM 80,000",
      status: "You can buy it but think!",
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800 pl-1">
          Financial Goals
        </h2>
        <button className="bg-[#4BC0C0] border-2 border-[#4BC0C0] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#4BC0C0] font-bold transition-all duration-200">
          Add Goals
        </button>
      </div>

      <div className=" p-4 space-y-3 flex flex-col gap-3 pt-1">
        {goals.map((goal, index) => (
          <div key={index} className=" hover:bg-gray-100 p-3 rounded-lg ">
            <div className="flex justify-between  items-center flex-row h-full">
              <div className="flex flex-col w-[90%] gap-1">
                <div className="font-bold text-black text-lg">{goal.name}</div>
                <div className="text-base text-black/70">{goal.amount}</div>
                <p className="text-sm text-black/50">{goal.status}</p>
              </div>
              <div className="flex flex-col w-[10%] items-center justify-center gap-2">
                <button className="bg-[#4BC0C0] w-full text-white px-3 py-1 rounded text-base hover:bg-green-600">
                  Done
                </button>
                <button className="bg-[#FF6384] w-full text-white px-3 py-1 rounded text-base hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
