"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  const [selectedOption, setSelectedOption] = useState("Pomodoro");
  const [time, setTime] = useState(25 * 60); // Initial time in seconds (25 minutes)
  const [isActive, setIsActive] = useState(false);

  const options = {
    Pomodoro: 25 * 60,
    "Short Break": 5 * 60,
    "Long Break": 15 * 60,
  };

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      const nextOption =
        selectedOption === "Pomodoro" ? "Short Break" : "Pomodoro";
      setSelectedOption(nextOption);
      setTime(options[nextOption]);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, selectedOption, options]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
    setTime(options[newOption]);
    setIsActive(false);
  };

  return (
    <div>
      <div className="bg-white/25 w-1/2 m-auto mt-5 rounded-[20px] py-[50px] px-[250px] flex flex-col items-center text-[100px]">
        <div className="text-[16px] flex">
          {Object.keys(options).map((option, index) => {
            return (
              <button
                className={`border-none m-0 rounded-[4px] p-[2px 12px] h-7 cursor-pointer bg-none text-white opacity-100 font-bold w-[100px] focus:bg-white/25 ${
                  option === selectedOption ? "bg-white/25" : ""
                }`}
                key={index}
                onClick={() => handleOptionChange(option)}
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
            onClick={() => handleOptionChange("Pomodoro")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

