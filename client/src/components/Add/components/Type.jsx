import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";
import { doc, getDoc } from "@firebase/firestore";

const Type = ({ typeChange, transactions }) => {
  const [expand, SetExpand] = useState(false);
  const [type, setType] = useState(null);
  const { userData } = useContext(appContext);
  const [userType, setUserType] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setType(null);
    setLoading(true);
    if (transactions == "Income") {
      setUserType(userData?.Income_cato);
    } else if (transactions == "Expenses") {
      setUserType(userData?.Expenses_cato);
    }

    setLoading(false);
  }, [transactions]);
  useEffect(() => {
    typeChange(type);
  }, [type]);
  return (
    <div className="">
      <div className="flex flex-col gap-3 w-full justify-center items-center mt-7 ">
        {/* dropdown start */}
        <div className="flex flex-col w-full">
          <button
            onClick={() => SetExpand(!expand)}
            className={`w-full p-3 border-2 flex ${
              type ? "justify-center " : ""
            } flex-col items-start type rounded-t-lg h-20 hover:bg-gray-100`}
          >
            <h1
              className={`${
                type
                  ? "text-sm "
                  : "text-base flex items-center justify-center h-full"
              } transition-all duration-300 text-black/70`}
            >
              Select Type
            </h1>
            <div
              className={`overflow-hidden duration-300 transition-all ease-linear ${
                type ? "min-h-1 px-1 " : "py-0 max-h-0 min-h-0 invisible"
              }`}
            >
              <h1
                className={`${
                  type ? "visible" : "invisible"
                } text-black flex flex-row items-center gap-1`}
              >
                <div className={`transition-all duration-300`}>
                  {type == "Income" ? (
                    <Icon
                      icon="material-symbols-light:login-outline-rounded"
                      className="w-7 h-7 text-[#4BC0C0]"
                    />
                  ) : type == "Expenses" ? (
                    <div>
                      <Icon
                        icon="material-symbols-light:logout-rounded"
                        className="h-7 w-7 text-[#FF6384]"
                      />
                    </div>
                  ) : null}
                </div>
                {type}
              </h1>
            </div>
          </button>
          {/* expand */}
          <div
            className={` transition-all px-4 ease-linear flex flex-row overflow-hidden ${
              expand
                ? "py-4 border-x-2 border-b-2  rounded-b-xl"
                : "py-0 max-h-0"
            }`}
          >
            {/* data */}
            {transactions ? (
              <div className="w-full h-full">
                {userType?.map((_type) => (
                  <div className="w-full p-1 flex flex-col gap-2">
                    <div
                      onClick={() => {
                        setType(_type.name);
                        SetExpand(false);
                      }}
                      className="border-b-2 flex flex-row  items-center gap-2 hover:gap-3  border-black/40 p-2 hover:border-0 hover:rounded-lg transition-all duration-75 hover:bg-gray-100 "
                    >
                      {_type.name}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              "please select transaction type"
            )}
          </div>
        </div>
        {/* dropdown end */}
      </div>
    </div>
  );
};

export default Type;
