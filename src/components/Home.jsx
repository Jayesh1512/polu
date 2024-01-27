import React, { useState } from 'react';
import dextertitle from '../assets/dextertitle.svg';
import regbutton from '../assets/regbutton.svg';
import dexterlog from '../assets/dexterlog.svg';
import gdsclogo from '../assets/gdsclogo.svg';
import backgroundImage from '../assets/bg1.svg';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-transparent backdrop-blur-lg text-white p-4">
        <div className="flex justify-between items-center">
          <img src={gdsclogo} alt="" className='w-1/2 lg:w-auto'/>
          <button
            className="md:hidden block text-white focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <ul className={`md:flex md:space-x-4 mt-4 md:mr-10 text-black text-xl ${isMenuOpen ? "block" : "hidden"}`}>
            <li>About</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <img src={dextertitle} alt="Dexter Title" className='lg:w-[30vw] w-[80vw] lg:py-2 pt-28 mt-10'/>
        <div className='flex justify-center p-2'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2nx0bCKlK12hJF5GKsCf-kZ36h52X3S9m1rARjoWZVJwxDw/formrestricted?pli=1" target="_blank" rel="noopener noreferrer">
            <img src={regbutton} alt="Registration Button" className='lg:w-[15vw] w-[50vw] lg:py-5'/>
          </a>
        </div>
        <div className='flex justify-center'>
          <img src={dexterlog} alt="Dexter Logo" className='lg:w-[25vw] w-[80vw] lg:py-3 py-8'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
