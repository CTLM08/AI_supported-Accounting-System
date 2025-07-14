import React from "react";

const Introduce = () => {
  return (
    <div className=" p-12 flex justify-center items-center flex-col bg-[#4BC0C0]  w-[30%] text-white">
      <div className="font-bold text-2xl pb-3 text-white ">
        Start Your Journey to Financial Freedom
      </div>
      <div className="pb-10 text-white ">
        Take charge of your money with AI-driven insights and tailored financial
        guidance.
      </div>
      <div className="space-y-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <div>
            <div className="font-semibold">Smart Investment Tracking</div>
            <div className="pt-1 text-sm text-white/60">
              Stay ahead with real-time analytics to monitor and optimize your
              investment portfolio.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <div>
            <div className="font-semibold">Customized Financial Goals</div>
            <div className="pt-1 text-sm text-white/60">
              Set meaningful goals and achieve them with step-by-step AI-powered
              planning.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <div>
            <div className="font-semibold">AI-Powered Budget Management</div>
            <div className="pt-1 text-sm text-white/60">
              Track your spending, control your budget, and save smarter with
              intelligent tools.
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center  text-white py-12 px-4 space-y-6">
        <div class="flex">
          <div class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold"></div>
          <div class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold -ml-3"></div>
          <div class="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold -ml-3"></div>
        </div>

        <p class="text-base font-medium text-center max-w-md text-white/70">
          Join us for more{" "}
          <span className="font-bold text-white">birlliant</span> finance
          management{" "}
        </p>
      </div>
    </div>
  );
};

export default Introduce;
