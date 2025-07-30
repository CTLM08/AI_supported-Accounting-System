import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";

const Accounts = () => {
  const { userData } = useContext(appContext);
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    if (userData) {
      setAccounts(userData?.payment);
    }
  }, [userData]);

  return (
    <div>
      <div className="">
        <div className="rounded-xl p-3  w-full gap-3 flex flex-col overflow-y-auto">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="flex justify-between hover:bg-gray-100 p-3 rounded-lg w-full flex-row items-center"
            >
              <span className="font-bold">{account.name}</span>
              <span className="text-[#4BC0C0] font-semibold">
                {account.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
