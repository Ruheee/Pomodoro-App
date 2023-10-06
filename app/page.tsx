"use client";

import NavBar from "@/app/components/navbar";
import Counter from "@/app/components/counter";
import { useState } from "react";

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [stage, setStage] = useState(0);

  const switchStage = (index) => {
    setStage(index)
  }

  const setTimer = () => {
    const timer = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak
    }
    return timer[stage];
  }

  return (
    <main className="min-h-screen bg-[#BA4949] px-[600px] box-border m-0 p-0">
      <NavBar />
      <Counter stage={stage} setTimer={setTimer} switchStage={switchStage}/>
    </main>
  );
}
