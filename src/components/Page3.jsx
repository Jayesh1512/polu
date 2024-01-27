// import React from 'react';
import backgroundImage from "../assets/bg2.svg";
import About from "../assets/about.svg";

const Page3 = () => {
  return (
    <div className="bg-cover bg-center h-screen md:h-screen w-screen p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center">
      <div className="bg-white md:h-[120vh] w-full md:w-3/4 h-[80vh] lg:w-1/2 xl:w-2/3  flex flex-col md:flex-row p-4">
        <img src={About} alt="" className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mb-0" />
        <div className="flex flex-col justify-center text-center md:w-1/2 md:ml-4">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About The Event</p>
          <p className="text-lg md:text-xl lg:text-2xl p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Page3;
