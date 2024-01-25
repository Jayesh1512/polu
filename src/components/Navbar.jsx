import React from 'react';
import gdsclogo from '../assets/gdsclogo.svg';

function Navbar() {
  return (
    <div className='flex justify-between p-6 w-screen bg-transparent'>
      {/* left */}
      <div className='w-2/5'>
        <img src={gdsclogo} alt="logo" />
      </div>
      {/* right */}
      <div className='flex w-2/5 justify-around'>
        <p className="text-black text-3xl pt-2">About</p>
        <p className="text-black text-3xl pt-2">FAQ</p>
      </div>

    </div>
  );
}

export default Navbar;
