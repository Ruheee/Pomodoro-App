"use client";

import NavBar from "@/app/components/navbar";
import Counter from "@/app/components/counter";
import Player from "@/app/components/player";


export default function Home() {


  return (
    <main className="min-h-screen bg-[#BA4949] px-[600px] box-border m-0 p-0">
      <NavBar />
      <Counter />
      <Player />  
    </main>
  );
}
