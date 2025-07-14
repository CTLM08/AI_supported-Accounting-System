import React from "react";

const Accounts = () => {
  const accounts = [
    { name: "Main Account", amount: "RM 5,000" },
    { name: "Bank", amount: "RM 3,200" },
    { name: "Debit Card", amount: "RM 1,000" },
    { name: "Investment", amount: "RM 8,500" },
    { name: "Touch 'n Go", amount: "RM 250" },
  ];

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
