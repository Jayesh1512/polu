// Page2Card.js
import React from 'react';


function Card({ image1, title ,image2 ,contents}) {
  return (
    <div className="flex flex-col space-y-4 bg-white max-w-sm py-10 px-8">
      {/* top */}
      <div className="flex gap-1 ">
        <img src={image1} alt="" className="" />
        <h1 className=" mt-24 text-[33px] font-extrabold  text-cardTitle ">{title}</h1>
      </div>
      {/* bottom */}
      <div className="flex bg-card w-full h-full px-3 py-7 justify-evenly pr- pr-7">
        {/* left */}
        <img src={image2} alt="" className="" />
        {/* right */}
        <p className="text-white text-xl ">
        {contents}
        </p>

      </div>
    </div>
  );
}



export default Card;
