import React from "react";

const Strengths = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-2 overflow-y-auto">
      <div className="w-full flex flex-col rounded-lg hover:bg-gray-100 p-3">
        <h1 className="font-semibold">Saving Habits</h1>
        <p className="text-black/60 ">
          You have a consistent saving habit, which is a great strength. Keep it
          up!
        </p>
      </div>
    </div>
  );
};

export default Strengths;
