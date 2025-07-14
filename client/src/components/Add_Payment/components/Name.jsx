import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

const Name = ({ nameChange }) => {
  const [name, setName] = useState();
  useEffect(() => {
    nameChange(name);
  }, [name]);
  return (
    <div className="">
      <div className="flex flex-col gap-3 w-full justify-center items-center mt-7 ">
        <div className="flex flex-col w-full">
          <button
            className={`w-full p-3 border-2 flex flex-col items-start type rounded-t-lg h-20 relative justify-center  hover:bg-gray-100`}
          >
            <h1
              disabled={true}
              className={`
                ${
                  name != null
                    ? "text-sm"
                    : " absolute text-base flex items-center justify-center h-full"
                }
                 text-base  h-full transition-all duration-300 text-black/70`}
            >
              Payment
            </h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`} transition-all duration-300 text-black text-base flex items-center justify-center h-full w-full outline-none`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Name;
