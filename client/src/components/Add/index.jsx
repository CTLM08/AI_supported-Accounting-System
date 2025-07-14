import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Transactions_Type from "./components/Transactions_Type";
import { Icon } from "@iconify/react/dist/iconify.js";
import { appContext } from "../../App";
import Money from "./components/Money";
import Type from "./components/Type";
import Payment from "./components/Payment";
import Date from "./components/Date";
import Submit from "./components/Submit";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "@firebase/firestore";
import { firestore } from "../../../firebase";

const Add = ({ defaultType }) => {
  const [transaction_type, Set_Transaction_Type] = useState(null);

  const [type, setType] = useState();
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState();
  const [date, setDate] = useState(null);
  const { uid, SetFront, SetIsAdd, userData } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [temp_payment, setTemp_payment] = useState();
  useEffect(() => {
    console.log(date);
  }, [date]);
  useEffect(() => {
    console.log(uid);
    onSnapshot(doc(firestore, "user", uid), (doc) => {
      setTemp_payment(doc.data()?.payment);
    });
  }, [userData]);
  async function updatePayment(amount, name) {
    try {
      console.log(temp_payment);
      const updatedPaymentArray = temp_payment.map((item) => {
        if (item?.name === name) {
          console.log(item.amount);
          const newAmount = Number(item.amount) + Number(amount);
          return { ...item, amount: newAmount };
        }
        return item;
      });
      console.log(updatedPaymentArray);
      await updateDoc(doc(firestore, "user", uid), {
        payment: updatedPaymentArray,
      });
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  }

  async function submitTransaction() {
    setLoading(true);
    if (transaction_type == "Income") {
      await updateDoc(doc(firestore, "user", uid), {
        income: arrayUnion({
          amount: amount,
          cato: type,
          date: date,
          payment: paymentType,
        }),
      });
      updatePayment(amount, paymentType);
    } else if (transaction_type == "Expenses") {
      await updateDoc(doc(firestore, "user", uid), {
        expenses: arrayUnion({
          amount: amount,
          cato: type,
          date: date,
          payment: paymentType,
        }),
      });
      updatePayment(amount * -1, paymentType);
    }
    setLoading(false);
  }

  return (
    <div className="w-full h-screen bg-gray-400/50 flex justify-center items-center">
      <div className="bg-white shadow-md w-[40%] h-[90%] p-5 rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">Add Transactions</h1>
          <Icon
            onClick={() => SetIsAdd(false)}
            icon="iconoir:cancel"
            className="w-8 h-8 text-black/70"
          />
        </div>
        <div className="w-full  overflow-y-auto  h-[90%] flex flex-col ">
          <Transactions_Type
            typeChange={Set_Transaction_Type}
            defaultType={defaultType}
          />
          <Money amountChange={setAmount} />
          <Type typeChange={setType} transactions={transaction_type} />
          <Payment paymentChange={setPaymentType} />
          <Date dateChange={setDate} />
          <button>
            {loading ? (
              <div className="w-full rounded-lg mt-5 h-20 flex flex-row p-5 items-center text-white font-bold transition-all text-xl justify-center bg-[#4BC0C0] hover:gap-5 gap-2">
                <Icon icon="line-md:loading-loop" className="w-7 h-7" />
              </div>
            ) : (
              <button
                className="w-full"
                onClick={() => {
                  if (
                    amount &&
                    type &&
                    date &&
                    paymentType &&
                    transaction_type
                  ) {
                    console.log("yuess");
                    submitTransaction();
                    SetIsAdd(false);
                    SetFront(false);
                  } else {
                    alert("The Form is Incomplete!");
                  }
                }}
              >
                <Submit />
              </button>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
