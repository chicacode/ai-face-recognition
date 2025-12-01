import Tilt from "react-parallax-tilt";
import { User, LogOut } from 'lucide-react';
import Logo from "./Logo";


const Navigation = ({setShowSignIn, isSignedIn, handleSignOut, showSignIn }) => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
      
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              className="h-24 w-auto rounded-full"
            /> */}
            <Logo />
          </Tilt>

       
   
      </div>


        {isSignedIn ? (
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 transition-all duration-300 hover:scale-105"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => setShowSignIn(!showSignIn)}
          className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 transition-all duration-300 hover:scale-105"
        >
          <User className="w-4 h-4" />
          {showSignIn ? 'Register' : 'Sign In'}
        </button>
      )}
    </nav>
  );
};

export default Navigation;
