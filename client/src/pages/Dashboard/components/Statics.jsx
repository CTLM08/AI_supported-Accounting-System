import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Statics = () => {
  return (
    <div className="w-full h-full flex flex-row justify-between items-center text-white gap-2">
      {/* box 1 */}
      <div className="flex flex-row bg-[#4BC0C0] w-full h-full p-5 gap-3 items-center rounded-lg">
        <div className=" p-2 rounded-full border-2 border-white">
          <Icon icon="streamline:graph-arrow-increase" className="w-6 h-6 " />
        </div>
        <div className="">
          <h1 className="font-bold text-xl">Net Worth</h1>
          <span className="text-white/80">
            net worth increase <span className="font-bold">10%</span> in this
            month
          </span>
        </div>
      </div>
      {/* box 2 */}
      <div className="flex flex-row bg-[#FF6384] w-full h-full p-5 gap-3 items-center rounded-lg">
        <div className=" p-2 rounded-full border-2 border-white">
          <Icon icon="streamline:graph-arrow-decrease" className="w-6 h-6 " />
        </div>
        <div className="">
          <h1 className="font-bold text-xl">Spending</h1>
          <span className="text-white/80">
            spending decrease <span className="font-bold">10%</span> in this
            month
          </span>
        </div>
      </div>
      {/* box 3 */}
      <div className="flex flex-row bg-[#36A2EB] w-full h-full p-5 gap-3 items-center rounded-lg">
        <div className=" p-2 rounded-full border-2 border-white">
          <Icon icon="streamline:graph-arrow-increase" className="w-6 h-6 " />
        </div>
        <div className="">
          <h1 className="font-bold text-xl">Saving Rate</h1>
          <span className="text-white/80">
            <span className="font-bold">10%</span> of your income is saved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Statics;
