import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const Colour = ({ colourChange }) => {
  const [expand, SetExpand] = useState(false);
  const [colour, setColour] = useState();

  useEffect(() => {
    colourChange(colour);
  }, [colour]);
  return (
    <div className="">
      <div className="flex flex-col gap-3 w-full justify-center items-center mt-7 ">
        <div className="flex flex-col w-full">
          <button
            onClick={() => SetExpand(!expand)}
            className={`w-full p-3 border-2 flex flex-col items-start type rounded-t-lg h-20 relative justify-center  hover:bg-gray-100`}
          >
            <h1
              disabled={true}
              className={`
                ${
                  colour != null
                    ? "text-sm"
                    : " absolute text-base flex items-center justify-center h-full"
                }
                 text-base  h-full transition-all duration-300 text-black/70`}
            >
              Category Colour
            </h1>
            <div>{colour}</div>
          </button>
          <div
            className={` transition-all px-4 ease-linear flex flex-row overflow-hidden ${
              expand
                ? "py-4 border-x-2 border-b-2  rounded-b-xl"
                : "py-0 max-h-0"
            }`}
          >
            <HexColorPicker color={colour} onChange={setColour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colour;
