import React, { use, useContext, useState } from "react";
import Name from "./components/Name";
import Amount from "./components/Amount";
import Submit from "./components/Submit";
import { Icon } from "@iconify/react/dist/iconify.js";
import { appContext } from "../../App";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../firebase";

const Add_Goal = () => {
  const { setIsAddGoal, uid } = useContext(appContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);

    await updateDoc(doc(firestore, "user", uid), {
      goals: arrayUnion({
        name: name,
        amount: amount,
        finish: false,
      }),
    });
    setLoading(false);
  };
  return (
    <div className="w-full h-screen bg-gray-400/50 flex justify-center items-center">
      <div className="bg-white shadow-md w-[40%]  p-5 rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">Add Category</h1>
          <Icon
            onClick={() => setIsAddGoal(false)}
            icon="iconoir:cancel"
            className="w-8 h-8 text-black/70"
          />
        </div>
        <Name nameChange={setName} />
        <Amount amountChange={setAmount} />
        <button
          onClick={() => {
            if (name && amount > 0) {
              submit();
              setIsAddGoal(false);
            } else {
              alert("the information is not complete");
            }
          }}
          className="w-full"
        >
          <Submit />
        </button>
      </div>
    </div>
  );
};

export default Add_Goal;
