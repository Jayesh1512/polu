// Page2Card.js
import React from 'react';


function Card({ image1, title ,image2 ,contents,contents2}) {
  return (
    <div className="flex flex-col space-y-4 bg-white max-w-sm py-10 px-8">
      {/* top */}
      <div className="flex gap-1 md:flex-row md:gap-0 flex-col">
        <img src={image1} alt="" className="" />
        <h1 className=" mt-12 text-[24px] font-extrabold  text-cardTitle ">{title}</h1>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row bg-card w-full h-full px-3 py-7 justify-evenly pr- pr-7">
        {/* left */}
        <img src={image2} alt="" className="" />
        {/* right */}
        <div className="flex flex-col">
        <p className="text-white text-x1 font-bold">
        {contents}
        </p>
        <p className="text-white text-x2">
        {contents2}
        </p>
        </div>

      </div>
    </div>
  );
}



export default Card;
