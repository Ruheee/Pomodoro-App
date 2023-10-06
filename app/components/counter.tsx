"use client";

import { useState } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);

 
  return (
    <div>
      <div className="bg-white/25 w-1/2  m-auto mt-5 rounded-[20px] py-[50px]  px-[250px] flex flex-col items-center text-[100px]">
        <div className="text-[16px] flex">
          <button className="border-none m-0 rounded-[4px] p-[2px 12px] h-7 cursor-pointer bg-none text-white opacity-100 font-bold w-[100px] focus:bg-white/25">
            Pomodoro
          </button>
          <button className="border-none m-0 rounded-[4px] p-[2px 12px] h-7 cursor-pointer bg-none text-white opacity-100 font-bold w-[100px] focus:bg-white/25">
            Short Break
          </button>
          <button className="border-none m-0 rounded-[4px] p-[2px 12px] h-7 cursor-pointer bg-none text-white opacity-100 font-bold w-[100px] focus:bg-white/25">
            Long Break
          </button>
        </div>
        <div>
          <p className="font-bold text-white text-[98px]">15:00</p>
        </div>
        <button className="text-[#BA4949] text-[24px] bg-white px-16 py-1 rounded-md mt-2 drop-shadow-xl">Start</button>
      </div>
    </div>
  );
};

export default Counter;
