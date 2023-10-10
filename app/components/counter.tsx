"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  const [time, setTime] = useState(25 * 60); // Initial time in seconds (25 minutes)
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setIsBreak(!isBreak);
      setTime(isBreak ? 25 * 60 : 5 * 60); // Switch between work and break time
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false); // Reset to work time
    setTime(25 * 60); // Reset to 25 minutes (or your desired initial time)
  };

  return (
    <div>
      <div className="bg-white/25 w-1/2  m-auto mt-5 rounded-[20px] py-[50px]  px-[250px] flex flex-col items-center text-[100px]">
        <div className="text-[16px] flex">
          {options.map((option, index) => {
            return (
              <button
                className="border-none m-0 rounded-[4px] p-[2px 12px] h-7 cursor-pointer bg-none text-white opacity-100 font-bold w-[100px] focus:bg-white/25"
                key={index}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div>
          <p className="font-bold text-white text-[98px]">{formatTime(time)}</p>
        </div>
        <div className="flex">
          <button
            className="text-[#BA4949] text-[24px] bg-white px-14 py-2 rounded-md mt-2 drop-shadow-xl uppercase font-bold mr-2"
            onClick={toggleTimer}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            className="text-[#BA4949] text-[24px] bg-white px-14 py-2 rounded-md mt-2 drop-shadow-xl uppercase font-bold"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
