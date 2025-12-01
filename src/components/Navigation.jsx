import Tilt from "react-parallax-tilt";

const Navigation = () => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <img
              src="https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              className="h-24 w-auto rounded-full"
            />
          </Tilt>

          {/* <img
              src="https://plus.unsplash.com/premium_photo-1761941892640-f35028178a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
              alt="logo"
              className="h-8 w-auto"
            /> */}
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          command="show-modal"
          commandfor="mobile-menu"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
        >
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm/6 font-semibold text-white">
          Product
        </a>
        <a href="#" className="text-sm/6 font-semibold text-white">
          Features
        </a>
        <a href="#" className="text-sm/6 font-semibold text-white">
          Marketplace
        </a>
        <a href="#" className="text-sm/6 font-semibold text-white">
          Company
        </a>
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-end space-x-4">
        <a href="#" className="text-sm/6 font-semibold text-white">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#" className="text-sm/6 font-semibold text-white">
          Sign Out <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
