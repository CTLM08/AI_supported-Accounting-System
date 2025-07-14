import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { signInWithGoogle } from "../../../../firebase.js ";

const Function = () => {
  return (
    <div className="w-[70%] rounded-lg flex flex-col gap-4 justify-start items-start bg-white p-11 shadow-md">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Welcome Back to Wife Finance!</h1>
        <p> Please log in to continue.</p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-black/70">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-black/70">Password</h1>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="w-full mt-5">
        <button className="w-full bg-[#4BC0C0] hover:gap-4 hover:bg-[#458282] flex flex-row justify-center items-center text-white text-xl font-bold py-3 px-4 rounded-lg transition-all gap-2 duration-200">
          <div>Log In</div>
          <Icon icon="lucide:arrow-up" className="w-6 h-6" rotate={1} />
        </button>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-4">
        <div className="w-full h-0.5 bg-gray-200 rounded-full"></div>
        <div className="flex flex-row w-full justify-center items-center text-black/50">
          Or Log In With
        </div>
        <div className="w-full h-0.5 bg-gray-200 rounded-full"></div>
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-4 gap-5">
        <button
          onClick={() => signInWithGoogle()}
          className="w-full hover:border-[#FF6384] hover:gap-4 font-semibold hover:font-bold hover:bg-[#FF6384] text-black/70 hover:text-white transition-all duration-200 flex flex-row items-center gap-2 justify-center rounded-lg border-2 border-black/60 p-3"
        >
          <Icon icon="flat-color-icons:google" className="w-6 h-6" />
          <p className="text-xl ">Google</p>
        </button>
      </div>
    </div>
  );
};

export default Function;
