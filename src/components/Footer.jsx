import React from 'react';
import insta from '../assets/insta.svg';
import discord from '../assets/discord.svg';
import linkedin from '../assets/linkedin.svg';
import footer from '../assets/footerdexto.svg';
import x from '../assets/x.svg';

function Footer() {
  return (
    <div className='w-full bg-black flex flex-col lg:flex-row justify-between items-center txt'>
      <div className='w-full lg:w-1/4 text-center mb-4 lg:mb-0'>
        <img src={footer} alt="" />
      </div>
      <div className='w-full lg:w-3/4 flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-12 justify-center mt-4'>
          <a href="https://www.instagram.com/gdsc_rcoem/"><img src={insta} alt="" className='w-8 lg:w-12' /></a>
          <a href="https://www.linkedin.com/company/gdsc-rcoem/mycompany/"><img src={linkedin} alt="" className='h-8 lg:h-12' /></a>
          <a href="https://discord.com/invite/SBKyNqkaCp"><img src={discord} alt="" className='h-8 lg:h-12' /></a>
          <a href="https://twitter.com/gdsc_rcoem"> <img src={x} alt="" className='w-8 lg:w-12' /> </a>
        </div>
        <p className='text-white mt-4 lg:mt-8 lg:text-2xl text-center txt'>
          Shri Ramdeobaba College of Engineering and Management<br />
          Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013
        </p>
        <p className='text-white lg:text-2xl mt-4 txt'>
          Email: <a href='mailto:dsc.rknec@gmail.com'>dsc.rknec@gmail.com</a>
        </p>
        <div className='flex items-center mt-4'>
          <p className='text-white lg:text-xl lgbtq txt'>
            Made with</p> <p className='lg:text-xl mx-1'>❤️</p> <p className='text-white lg:text-xl lgbtq txt'>by GDSC RCOEM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
