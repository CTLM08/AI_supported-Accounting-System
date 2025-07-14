import React from "react";
import Function from "./components/Function";
import Introduce from "./components/Introduce";

const Login = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-[70%] flex justify-center items-center bg-gray-100 h-full">
        <Function />
      </div>
      <Introduce />
    </div>
  );
};

export default Login;
