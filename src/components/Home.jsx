import React from 'react'
import dextertitle from '../assets/dextertitle.svg'
import regbutton from '../assets/regbutton.svg'
import dexterlog from '../assets/dexterlog.svg'


function Home() {
  return (
    <>
    <div className='flex justify-center'>
      <img src={dextertitle} alt="" className='lg:w-[30vw] w-[80vw] lg:py-2 pt-40'/>    
    </div>
    <div className='flex justify-center p-2'>
    <img src={regbutton} alt="" className='lg:w-[15vw] w-[50vw] lg:py-5 py-10'/>    
    </div>
    <div className='flex justify-center'>
    <img src={dexterlog} alt="" className='lg:w-[25vw] w-[80vw] lg:py-3 py-8'/>    
    </div>
    </>
  )
}

export default Home
