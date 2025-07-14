import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import Up from "./components/Up";
import Bottom from "./components/Bottom";

const TaskBar = () => {
  return (
    <div className="flex flex-col justify-between gap-5 h-full w-full">
      <Up />
      <Bottom />
    </div>
  );
};

export default TaskBar;
