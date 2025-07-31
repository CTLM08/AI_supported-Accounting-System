import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext, useState } from "react";
import { appContext } from "../../App";
import Start from "./components/Start";
import End from "./components/End";
import Frequency from "./components/Frequency";
import Amount from "./components/Amount";
import Submit from "./components/Submit";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../firebase";
import Name from "./components/Name";
const Add_Standing_Order = () => {
  const { setIsAddStanding, uid } = useContext(appContext);
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState();
  const [amount, setAmount] = useState(0);
  function submit() {
    updateDoc(doc(firestore, "user", uid), {
      standing_order: arrayUnion({
        name: name,
        endDate: endDate,
        startDate: startDate,
        frequency: frequency,
        amount: amount,
      }),
    });
  }
  return (
    <div>
      {" "}
      <div className="w-full h-screen bg-gray-400/50 flex justify-center items-center">
        <div className="bg-white shadow-md w-[40%]  p-5 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-bold">Add Standing Order</h1>
            <Icon
              onClick={() => setIsAddStanding(false)}
              icon="iconoir:cancel"
              className="w-8 h-8 text-black/70"
            />
          </div>
          <div className="w-full  overflow-y-auto  h-[90%] flex flex-col ">
            <Name nameChange={setName} />
            <Start dateChange={setStartDate} />
            <End dateChange={setEndDate} />
            <Frequency typeChange={setFrequency} />
            <Amount amountChange={setAmount} />
            <button
              onClick={() => {
                submit();
                setIsAddStanding(false);
              }}
              className="w-full"
            >
              <Submit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Standing_Order;
