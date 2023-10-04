"use-client";
import { GrMusic } from "react-icons/gr";
const NavBar = () => {
  return (
    <nav className=" w-full pt-10 border-b-[0.5px] border-zinc-700 text-white">
      <div className="flex justify-between pb-2" >
        <div className="flex items-baseline">
          <GrMusic className="mr-2 pt-1" size={18} />
          <h1 className="font-bold text-2xl font-body">Spotadoro</h1>
        </div>
        <div>
          <button className="mr-4 bg-white-200">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
