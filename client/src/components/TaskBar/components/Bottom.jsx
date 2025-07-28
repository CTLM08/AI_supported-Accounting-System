import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { signOut } from "../../../../firebase";
import { useContext } from "react";
import { appContext } from "../../../App";
import { Link } from "react-router-dom";

const Bottom = () => {
  const { navigate } = useContext(appContext);
  return (
    <div className="w-full flex flex-col gap-3">
      <Link to="/chat">
        <button className="flex items-center justify-center gap-3 bg-gray-100 w-full h-12 hover:bg-gray-200 transition-all duration-300 hover:gap-5 hover:font-bold">
          <p>Chat with AI</p>
          <Icon icon="lucide:arrow-up" className="w-6 h-6" rotate={1} />
        </button>
      </Link>
      <button
        onClick={() => {
          signOut(navigate);
        }}
        className="flex items-center flex-row justify-center w-full h-12 gap-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 hover:gap-5  hover:font-bold"
      >
        <p>Log Out</p>
        <Icon icon="ri:logout-box-line" />
      </button>
    </div>
  );
};

export default Bottom;
