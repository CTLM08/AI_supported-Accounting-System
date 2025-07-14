import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Recent_Transactions = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-auto">
      <div className="w-full bg-[#4BC0C0] hover:bg-[#458282] transition-all flex flex-row justify-between items-center p-4 rounded-lg">
        <div className="flex flex-row gap-2 items-center text-white">
          <Icon
            icon="streamline:graph-arrow-increase"
            className="w-10 h-10 text-white rounded-full border-2 border-white p-2"
          />
          <div className="flex flex-col items-start">
            <p className="font-bold">Salary Deposit</p>
            <p className="text-sm">Income</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-white font-bold">$5000</div>
          <div className="text-white/80 text-sm">10 Oct 2023</div>
        </div>
      </div>

      {/* box2 */}
      <div className="w-full bg-[#FF6384] transition-all hover:bg-[#d55d6f]  flex flex-row justify-between items-center p-4 rounded-lg">
        <div className="flex flex-row gap-2 items-center text-white">
          <Icon
            icon="streamline:graph-arrow-decrease"
            className="w-10 h-10 text-white rounded-full border-2 border-white p-2"
          />
          <div className="flex flex-col items-start">
            <p className="font-bold">Electric Bill</p>
            <p className="text-sm">Expenses</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-white font-bold">-$5000</div>
          <div className="text-white/80 text-sm">10 Oct 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Recent_Transactions;
