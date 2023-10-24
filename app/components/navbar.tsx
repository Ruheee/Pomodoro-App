import { GrMusic } from "react-icons/gr";



const NavBar = () => {
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b9b075e7f9a345a19d3f1a0d1b20385b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public";

  return (
    <nav className=" w-full pt-10 border-b-[0.5px] border-zinc-700 text-white">
      <div className="flex justify-between pb-2">
        <div className="flex items-baseline">
          <GrMusic className="mr-2 pt-1" size={18} />
          <h1 className="font-bold text-2xl">Spotadoro</h1>
        </div>
        <div>
          <div>
            <button className="mr-4 py-1.5 px-4 rounded-md text-sm bg-white/25 hover:bg-violet-700/75  ">
              <a href={AUTH_URL}>Log In</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;