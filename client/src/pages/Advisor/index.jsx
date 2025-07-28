import React from "react";
import Advise from "./components/Advise";
import Health_Score from "./components/Health_Score";
import Strengths from "./components/Strengths";
import Areas_Improve from "./components/Areas_Improve";

const Advisor = () => {
  return (
    // min-h-ful
    <div className="h-full w-full flex flex-col gap-4 p-1">
      <div className="w-full h-[40%] p-4 bg-white flex flex-col rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Advise</h1>
        <Advise />
      </div>
      <div className="w-full h-[40%] p-4 bg-white flex flex-col rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Financial Health Score</h1>
        <Health_Score />
      </div>
      <div className="w-full h-60 flex flex-row gap-3">
        <div className=" w-[50%] h-[100%] bg-white p-4 rounded-lg shadow-md flex flex-col">
          <h1 className="text-xl font-bold">Strengths</h1>
          <Strengths />
        </div>
        <div className=" w-[50%] h-[100%] bg-white p-4 rounded-lg shadow-md flex flex-col">
          <h1 className="text-xl font-bold">Areas to Improve</h1>
          <Areas_Improve />
        </div>
      </div>
    </div>
  );
};

export default Advisor;
