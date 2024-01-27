// Page2.js
import React from 'react';
import backgroundImage from '../assets/bg2.svg';
import what from '../assets/what.svg';
import when from '../assets/when.svg';
import how from '../assets/how.svg';
import Card from './Page2Card';
import f1 from '../assets/whatFlask.svg'
import f2 from '../assets/whenFlask.svg'
import f3 from '../assets/howFlask.svg'

function Page2() {
  return (
    <div className="bg-cover  bg-center p-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div className=" md:h-screen flex items-center justify-center ">
      <div className="flex flex-wrap justify-center w-full gap-8 mt-6">

<Card image1={what} title="ROUND 1" image2={f1} contents={`Marked Aptitude Challenge `} contents={`Prticipants answers a series of aptitude question related to general aptitude`}/>

<Card image1={when} title="ROUND 2" image2={f2} contents={`Dexter's Prompt Mishaps`} contents={`Participants are supposed to give prompts to generate an image which should be similar to one provided to them`}/>

<Card image1={how} title="ROUND 3" image2={f3} contents={`Markdark's Evil Incorporated Code Relay`} contents={`Teams are tasked with coding Dexter's latest invention, one person codes at a time`}/>

        </div> 
      </div>
    </div>
  );
}

export default Page2;
