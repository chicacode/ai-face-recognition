import Tilt from "react-parallax-tilt";
import { User, LogOut } from "lucide-react";
import Logo from "./Logo";

const Navigation = ({ user, handleSignOut, entries }) => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 mb-8"
    >
      <div className="flex items-center gap-3">
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}
        >
          <Logo />
          <p className="flex justify-start font-bold text-blue-900/75">Welcome, {user?.name} • Entry count: {entries}</p>
        </Tilt>
      </div>

      <div>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 transition-all duration-300 hover:scale-105"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
