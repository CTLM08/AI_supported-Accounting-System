import React from "react";

const Standing_Order = () => {
  return (
    <div className="w-full max-h-full min-h-full flex flex-col">
      <h1 className="text-xl font-bold">Standing Order</h1>
      <div className="w-full max-h-[70%] gap-3 overflow-y-auto">
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Tenant</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$200</div>
          </div>
        </button>
        {/* box2 */}
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Netflix Subscription</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$20</div>
          </div>
        </button>
        {/* box2 */}
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Charity Donation</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$100</div>
          </div>
        </button>
        {/* box2 */}
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Club Fees</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$10</div>
          </div>
        </button>
        {/* box2 */}
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Savings Transfer</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$150</div>
          </div>
        </button>
        {/* box3 */}
        <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold">Loan Repayment</p>
              <p className="text-sm text-black/50">July</p>
            </div>
            <div className="font-bold text-[#4BC0C0]">$100</div>
          </div>
        </button>
      </div>
      <button className="mt-3 p-3 rounded-lg  justify-center font-bold border-[#FF6384] border-2  transition-all duration-200 hover:bg-white  hover:text-[#FF6384] bg-[#FF6384]  text-white w-full">
        Add Standing Order
      </button>
    </div>
  );
};

export default Standing_Order;
