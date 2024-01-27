import React from 'react'
import insta from '../assets/insta.svg'
import discord from '../assets/discord.svg'
import linkedin from '../assets/linkedin.svg'
import footer from '../assets/footerdexto.svg'

import x from '../assets/x.svg'


function Footer() {
  return (
    <div className='w-full h-fit-content bg-black flex flex-col lg:flex-row justify-between items-between txt'>
      <div className='w-1/4'>
            <img src={footer} alt="" />
      </div>
      <div className='w-3/4 h-fit-content flex flex-col justify-center items-center '>
        <div className='flex gap-20 justify-center mt-4'>
            <a href="https://www.instagram.com/gdsc_rcoem/"><img src={insta} alt="" className='w-[50px]'/> </a>   
            <a href="https://www.linkedin.com/company/gdsc-rcoem/mycompany/"><img src={linkedin} alt="" className='h-[50px]'/></a>
            <a href="https://discord.com/invite/SBKyNqkaCp"><img src={discord} alt="" className='h-[50px]'/></a>
            <a href="https://twitter.com/gdsc_rcoem"> <img src={x} alt="" className='w-[50px]'/> </a>
        </div>   
        <p className='text-white mt-14 text-3xl text-center txt'>Shri Ramdeobaba College of Engineering and Management<br />
Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013</p>     
        <p className='text-white text-3xl mt-6 txt'>
        Email: <a href='dsc.rknec@gmail.com'>dsc.rknec@gmail.com</a>
        </p>
        <div className='flex'>
        <p className='text-white text-2xl lgbtq mt-6 txt'>
        Made with</p> <p className='text-2xl mt-6'>❤️</p> <p className='text-white text-2xl lgbtq mt-6'> by GDSC RCOEM
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
