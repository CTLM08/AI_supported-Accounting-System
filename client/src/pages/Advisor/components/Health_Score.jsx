import React from "react";

const Health_Score = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div className="flex h-[70%] flex-row justify-between items-center">
        {/* - */}
        <div className="flex flex-row justify-start items-start gap-3 h-full w-full mt-2">
          <div className="h-full">
            <button className="h-full aspect-square  border-4 border-[#4BC0C0] text-[#4BC0C0] font-bold rounded-full px-4 py-2">
              <p className="text-2xl">88</p>
            </button>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-xl font-bold text-[#4BC0C0]">Good</h1>
            <p className="text-black/60">Your health score is above average.</p>
          </div>
        </div>
        {/* - */}
        <div className="flex flex-col h-full gap-2 items-start w-[30%]">
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#FF6384]">Poor</h1>
            <p className="text-black/60">(0-50)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#ffe063]">Fair</h1>
            <p className="text-black/60">(51-70)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#4BC0C0]">Good</h1>
            <p className="text-black/60">(71-90)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#36A2EB]">Excellent</h1>
            <p className="text-black/60">(91-100)</p>
          </div>
        </div>
      </div>

      <div className="h-5 rounded-full w-full bg-gray-100 overflow-hidden">
        <div className="h-5 rounded-full w-[88%] bg-[#4BC0C0]"></div>
      </div>
    </div>
  );
};

export default Health_Score;
