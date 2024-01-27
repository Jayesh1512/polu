// // Page2.js
// import React from 'react';
// import backgroundImage from '../assets/bg2.svg';
// import what from '../assets/what.svg';
// import when from '../assets/when.svg';
// import how from '../assets/how.svg';
// import Card from './Page2Card';
// import f1 from '../assets/whatFlask.svg'
// import f2 from '../assets/whenFlask.svg'
// import f3 from '../assets/howFlask.svg'

// function Page2() {
//   return (
//     <div className="bg-cover  bg-center p-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
//       <div className=" md:h-screen flex items-center justify-center ">
//       <div className="flex flex-wrap justify-center w-full gap-8 mt-6">

// <Card image1={what} title="ROUND 1" image2={f1} contents={`Marked Aptitude Challenge `} contents2={`Prticipants answers a series of aptitude question related to general aptitude`}/>

// <Card image1={when} title="ROUND 2" image2={f2} contents={`Dexter's Prompt Mishaps`} contents2={`Participants are supposed to give prompts to generate an image which should be similar to one provided to them`}/>

// <Card image1={how} title="ROUND 3" image2={f3} contents={`Markdark's Evil Incorporated Code Relay`} contents2={`Teams are tasked with coding Dexter's latest invention, one person codes at a time`}/>

//         </div> 
//       </div>
//     </div>
//   );
// }

// export default Page2;


import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import backgroundImage from '../assets/bg2.svg';
import what from '../assets/what.svg';
import when from '../assets/when.svg';
import how from '../assets/how.svg';
import Card from './Page2Card';
import f1 from '../assets/whatFlask.svg';
import f2 from '../assets/whenFlask.svg';
import f3 from '../assets/howFlask.svg';

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const Page2 = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 100) {
      controls1.start('visible');
    }
    if (scrollY > 250) {
      controls2.start('visible');
    }
    if (scrollY > 350) {
      controls3.start('visible');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-cover bg-center p-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="md:h-screen flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <motion.div
            className="w-30%"
            initial="hidden"
            animate={controls1}
            variants={cardVariants}
            transition={{ duration: 0.6 }}
          >
            <Card
              image1={what}
              title="ROUND 1"
              image2={f1}
              contents={`Marked Aptitude Challenge `}
              contents2={`Participants answer a series of aptitude questions related to general aptitude`}
            />
          </motion.div>

          <motion.div
            className="w-30%"
            initial="hidden"
            animate={controls2}
            variants={cardVariants}
            transition={{ duration: 0.7 }}
          >
            <Card
              image1={when}
              title="ROUND 2"
              image2={f2}
              contents={`Dexter's Prompt Mishaps`}
              contents2={`Participants are supposed to give prompts to generate an image which should be similar to one provided to them`}
            />
          </motion.div>

          <motion.div
            className="w-30%"
            initial="hidden"
            animate={controls3}
            variants={cardVariants}
            transition={{ duration: 0.9 }}
          >
            <Card
              image1={how}
              title="ROUND 3"
              image2={f3}
              contents={`Markdark's Evil Incorporated Code Relay`}
              contents2={`Teams are tasked with coding Dexter's latest invention, one person codes at a time`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
