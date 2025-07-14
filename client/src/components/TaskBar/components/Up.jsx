import { Icon } from "@iconify/react";
import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { appContext } from "../../../App";
const Up = () => {
  const currentPath = useLocation();
  const { userData } = useContext(appContext);
  return (
    <div className="flex flex-col gap-6">
      <Link to="/">
        <div className="flex flex-row items-center gap-2 hover:bg-gray-100 transition-all duration-100">
          <Icon icon="ri:money-dollar-box-line" className="w-14 h-14" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Money</h1>
            <p className="text-sm ">Your personal finance app</p>
          </div>
        </div>
      </Link>
      <div>
        <Link to="/account" className="">
          <div className="flex flex-row items-center gap-5 hover:gap-7 transition-all duration-300 hover:bg-gray-100 p-3">
            <Icon icon="stash:user-avatar" className="w-10 h-10" />
            <p className="text-black">{userData?.userName}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-3 mt-4">
          <Link to="/dashboard">
            <li
              className={`flex flex-row items-center gap-3 hover:bg-gray-100 p-3 transition-all duration-300 ${
                currentPath.pathname == "/dashboard" ? "bg-gray-100" : ""
              }`}
            >
              <Icon icon="ri:dashboard-line" className="w-8 h-8" />
              <p>Dashboard</p>
            </li>
          </Link>
          <Link to="/budget">
            <li
              className={`flex flex-row items-center gap-3 hover:bg-gray-100 p-3 transition-all duration-300 ${
                currentPath.pathname == "/budget" ? "bg-gray-100" : ""
              }`}
            >
              <Icon icon="ri:wallet-line" className="w-8 h-8" />
              <p>Budget</p>
            </li>
          </Link>
          <Link to="/investment">
            <li
              className={`flex flex-row items-center gap-3 hover:bg-gray-100 p-3 transition-all duration-300 ${
                currentPath.pathname == "/investment" ? "bg-gray-100" : ""
              }`}
            >
              <Icon icon="ri:line-chart-line" className="w-8 h-8" />
              <p>Investment</p>
            </li>
          </Link>
          <Link to="/advisor">
            <li
              className={`flex flex-row items-center gap-3 hover:bg-gray-100 p-3 transition-all duration-300 ${
                currentPath.pathname == "/advisor" ? "bg-gray-100" : ""
              }`}
            >
              <Icon icon="mingcute:ai-line" className="w-8 h-8" />
              <p>Advisor</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Up;
