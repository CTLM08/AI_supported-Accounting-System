import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";

const Standing_Order = () => {
  const { setIsAddStanding, userData, uid } = useContext(appContext);
  const [Standing_Order, setStanding_order] = useState([]);
  useEffect(() => {
    if (userData) {
      setStanding_order(userData.standing_order);
    }
  }, [userData]);
  return (
    <div className="w-full max-h-full min-h-full flex flex-col">
      <h1 className="text-xl font-bold">Standing Order</h1>
      <div className="w-full max-h-[70%] gap-3 overflow-y-auto">
        {Standing_Order.map((s) => (
          <button className="hover:bg-gray-100 p-3 rounded-lg w-full flex flex-col items-center ">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-black/50">{s.frequency}</p>
              </div>
              <div className="font-bold text-[#FF6384]">{s.amount}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => setIsAddStanding(true)}
        className="mt-3 p-3 rounded-lg  justify-center font-bold border-[#FF6384] border-2  transition-all duration-200 hover:bg-white  hover:text-[#FF6384] bg-[#FF6384]  text-white w-full"
      >
        Add Standing Order
      </button>
    </div>
  );
};

export default Standing_Order;
