"use-client";

import { SignInButton, UserButton, auth } from "@clerk/nextjs";

import { GrMusic } from "react-icons/gr";

const NavBar = () => {
  const { userId } = auth();

  return (
    <nav className=" w-full pt-10 border-b-[0.5px] border-zinc-700 text-white">
      <div className="flex justify-between pb-2">
        <div className="flex items-baseline">
          <GrMusic className="mr-2 pt-1" size={18} />
          <h1 className="font-bold text-2xl">Spotadoro</h1>
        </div>
        <div>
          {!userId && (
            <div>
              <button className="mr-4 py-1.5 px-4 rounded-md text-sm bg-violet-700 hover:bg-violet-700/75  ">
                <SignInButton>Sign In</SignInButton>
              </button>
            </div>
          )}
          {userId && (
            <div className="mr-4 bg-white/50 rounded-xl">
              <UserButton afterSignOutUrl="/"/>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
