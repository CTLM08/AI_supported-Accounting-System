import React, { useContext, useState } from "react";
import Name from "./components/Name";
import Initial_amount from "./components/Initial_amount";
import Submit from "./components/Submit";
import { Icon } from "@iconify/react/dist/iconify.js";
import { appContext } from "../../App";

const Add_payment = () => {
  const { setIsAddPayment } = useContext(appContext);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div className="w-full h-screen bg-gray-400/50 flex justify-center items-center">
      <div className="bg-white shadow-md w-[40%]  p-5 rounded-lg">
        <div className="w-full  overflow-y-auto  h-[90%] flex flex-col ">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-bold">Add Accounts</h1>
            <Icon
              onClick={() => setIsAddPayment(false)}
              icon="iconoir:cancel"
              className="w-8 h-8 text-black/70"
            />
          </div>
          <Name nameChange={setName} />
          <Initial_amount amountChange={setAmount} />
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default Add_payment;
