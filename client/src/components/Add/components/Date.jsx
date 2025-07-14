import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

const Date = ({ dateChange }) => {
  const [expand, SetExpand] = useState(false);
  const [date, setDate] = useState();
  useEffect(() => {
    dateChange(date);
  }, [date]);
  return (
    <div className="">
      <div className="flex flex-col gap-3 w-full justify-center items-center mt-7 ">
        <div className="flex flex-col w-full">
          <button
            className={`w-full p-3 border-2 flex flex-col items-start type rounded-t-lg h-20 relative justify-center  hover:bg-gray-100`}
          >
            <h1
              className={`text-sm h-full transition-all duration-300 text-black/70`}
            >
              Date
            </h1>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="outline-none"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Date;
