import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../App";

const Health_Score = () => {
  const { userData, uid } = useContext(appContext);
  const [colour, setColour] = useState("");
  const [grade, setGrade] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (userData) {
      setScore(userData?.financial_score);
    }
  }, [userData]);
  // const checkScore = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/ai/score", {
  //       user: userData,
  //     });
  //     console.log("Score:", res.data.score);
  //     setScore(Number(res.data.score));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const Grading = () => {
    if (score >= 0 && score <= 50) {
      setColour("[#FF6384]");
      setGrade("Poor");
    } else if (score >= 51 && score <= 70) {
      setColour("[#ffe063]");
      setGrade("Fair");
    } else if (score >= 71 && score <= 90) {
      setColour("[#4BC0C0]");
      setGrade("Good");
    } else if (score >= 91 && score <= 100) {
      setColour("[#36A2EB]");
      setGrade("Excellent");
    }
    console.log(grade);
  };
  useEffect(() => {
    Grading();
    console.log(score);
  }, [score]);
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div className="flex h-[70%] flex-row justify-between items-center">
        {/* - */}
        <div className="flex flex-row justify-start items-start gap-3 h-full w-full mt-2">
          <div className="h-full">
            <button
              className={`h-full aspect-square  border-4 border-${colour} text-${colour} font-bold rounded-full px-4 py-2`}
            >
              <p className="text-2xl">{score} </p>
            </button>
          </div>
          <div className="flex flex-col h-full justify-center">
            <h1 className={`text-xl font-bold text-${colour}`}>{grade}</h1>
            <p className="text-black/60">Your health score is above average.</p>
          </div>
        </div>
        {/* - */}
        <div className="flex flex-col h-full gap-2 items-start w-[30%]">
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#FF6384]">Poor</h1>
            <p className="text-black/60">(0-50)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#ffe063]">Fair</h1>
            <p className="text-black/60">(51-70)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#4BC0C0]">Good</h1>
            <p className="text-black/60">(71-90)</p>
          </div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <h1 className="font-semibold text-[#36A2EB]">Excellent</h1>
            <p className="text-black/60">(91-100)</p>
          </div>
        </div>
      </div>

      <div className="h-5 rounded-full w-full bg-gray-100 overflow-hidden">
        <div
          className={`h-5 rounded-full bg-${colour}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Health_Score;
