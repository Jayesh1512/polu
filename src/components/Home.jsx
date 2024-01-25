import React from 'react'
import dextertitle from '../assets/dextertitle.svg'
import regbutton from '../assets/regbutton.svg'
import dexterlog from '../assets/dexterlog.svg'


function Home() {
  return (
    <>
    <div className='flex justify-center'>
      <img src={dextertitle} alt="" className='w-[40vw] '/>    
    </div>
    <div className='flex justify-center p-2'>
    <img src={regbutton} alt="" className='w-[15vw] '/>    
    </div>
    <div className='flex justify-center'>
    <img src={dexterlog} alt="" className='w-[20vw]'/>    
    </div>
    </>
  )
}

export default Home
