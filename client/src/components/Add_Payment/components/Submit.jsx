import { Icon } from "@iconify/react/dist/iconify.js";
import React, { use } from "react";

const Submit = () => {
  return (
    <div className="w-full rounded-lg mt-5 h-20 flex flex-row p-5 items-center text-white font-bold transition-all text-xl justify-center bg-[#4BC0C0] hover:gap-5 gap-2">
      <p>Submit</p>
      <Icon icon="lucide:arrow-up" className="w-7 h-7" rotate={1} />
    </div>
  );
};

export default Submit;
