import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useContext } from "react";
import { appContext } from "../../App";
import Name from "./components/Name";
import { useState } from "react";
import Colour from "./components/Colour";
import Submit from "./components/Submit";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../firebase";
import Transactions_Type from "./components/Transactions_Type";

const AddCategory = ({ transaction_type }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [transactionType, setTransactionType] = useState(transaction_type);
  const [colour, setColour] = useState("#000000");
  const { setIsAddCategory, uid } = useContext(appContext);
  const submitCategory = async () => {
    setLoading(true);
    if (transactionType == "Income") {
      updateDoc(doc(firestore, "user", uid), {
        Income_cato: arrayUnion({
          name: name,
          colour: colour,
        }),
      });
    } else if (transactionType == "Expenses") {
      updateDoc(doc(firestore, "user", uid), {
        Expenses_cato: arrayUnion({
          name: name,
          colour: colour,
        }),
      });
    }
    setLoading(false);
    setIsAddCategory(false);
  };
  return (
    <div className="w-full h-screen bg-gray-400/50 flex justify-center items-center">
      <div className="bg-white shadow-md w-[40%] h-[80%] p-5 rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">Add Category</h1>
          <Icon
            onClick={() => setIsAddCategory(false)}
            icon="iconoir:cancel"
            className="w-8 h-8 text-black/70"
          />
        </div>
        <div className="w-full  overflow-y-auto  h-[70%] flex flex-col overflow-y-auto">
          <Transactions_Type
            typeChange={setTransactionType}
            defaultType={transaction_type}
          />
          <Name nameChange={setName} />
          <Colour colourChange={setColour} />
        </div>
        <button className="w-full">
          {loading ? (
            <div className="w-full rounded-lg mt-5 h-20 flex flex-row p-5 items-center text-white font-bold transition-all text-xl justify-center bg-[#4BC0C0] hover:gap-5 gap-2">
              <Icon icon="line-md:loading-loop" className="w-7 h-7" />
            </div>
          ) : (
            <button onClick={() => submitCategory()} className="w-full">
              <Submit />
            </button>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
