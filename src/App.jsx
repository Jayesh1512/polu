import React from 'react';
import gdsclogo from '../assets/gdsclogo.svg';

function Navbar() {
  return (
    <div className='flex justify-between bg-gray-500 p-4'>
      {/* left */}
      <div>
        <a href='#'>
        <img src={gdsclogo} alt="logo" />
        </a>
      </div>
      {/* right */}
      <div className='flex'>
        <p className="text-black">About</p>
        <p className="text-black ">FAQ</p>
      </div>

    </div>
  );
}

export default Navbar;
