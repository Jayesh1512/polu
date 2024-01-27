import React from 'react'
import dextertitle from '../assets/dextertitle.svg'
import regbutton from '../assets/regbutton.svg'
import dexterlog from '../assets/dexterlog.svg'
import backgroundImage from '../assets/bg1.svg'

function Home() {
  return (
    <div className='bg-cover bg-center h-screen'  style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className='flex justify-center' >
      <img src={dextertitle} alt="" className='lg:w-[30vw] w-[80vw] lg:py-2 pt-40 mt-10'/>    
    </div>
    <div className='flex justify-center p-2'>
    <a href = "https://docs.google.com/forms/d/e/1FAIpQLSf2nx0bCKlK12hJF5GKsCf-kZ36h52X3S9m1rARjoWZVJwxDw/formrestricted?pli=1" ><img src={regbutton} alt="" className='lg:w-[15vw] w-[50vw] lg:py-5 py-10'/>  </a>  
    </div>
    <div className='flex justify-center'>
    <img src={dexterlog} alt="" className='lg:w-[30vw] w-[80vw] lg:py-3 py-8'/>    
    </div>
    </div>
  )
}

export default Home
