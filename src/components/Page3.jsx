// import React from 'react';
import backgroundImage from "../assets/bg2.svg";
import About from "../assets/about.svg";

const Page3 = () => {
  return (
    <div className="bg-cover bg-center h-[100vh] md:h-[120vh] w-screen p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-center items-center">
      <div className="bg-white w-full md:w-3/4 lg:w-1/2 xl:w-2/3  flex flex-col md:flex-row p-4">
        <img src={About} alt="" className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mb-0" />
        <div className="flex flex-col justify-center text-center md:w-1/2 md:ml-4">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About The Event</p>
          <p className="text-lg md:text-xl lg:text-2xl p-4 font-semibold">
            Dexter’s Laboratory Adventure is an engaging coding event featuring Mandark’s 
          Aptitude Challenge and Dexter’s Prompt Mishaps in Round 1. Teams earn points
           based on aptitude and prompt accuracy. Round 2, Code Relay, involves coding Dexter’s 
           invention collaboratively. Top teams auction points for exclusive rewards in Crazy Invention Auction
          </p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Page3;
