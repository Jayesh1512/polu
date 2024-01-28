import React, { useRef, useEffect, useState } from 'react';
import backgroundImage from '../assets/bg3.svg';
import liftImage2 from '../assets/lift2.svg';
import liftImage3 from '../assets/lift3.svg';
import liftImage4 from '../assets/lift4.svg';
import liftImage5 from '../assets/lift5.svg';
import liftImage6 from '../assets/lift6.svg';
import liftImage7 from '../assets/lift7.svg';
import liftImage8 from '../assets/lift8.svg';
import liftImage9 from '../assets/lift9.svg';
import liftImage10 from '../assets/lift10.svg';
import liftImage11 from '../assets/lift11.svg';
import liftImage12 from '../assets/lift12.svg';
import liftImage13 from '../assets/lift13.svg';
import liftImage14 from '../assets/lift14.svg';
import liftImage15 from '../assets/lift15.svg';
import liftImage16 from '../assets/lift16.svg';
import liftImage17 from '../assets/lift17.svg';
import liftImage18 from '../assets/lift18.svg';
import liftImage19 from '../assets/lift19.svg';
import liftImage20 from '../assets/lift20.svg';
import liftImage21 from '../assets/lift21.svg';


const liftImages = [ liftImage2, liftImage3,liftImage4,liftImage5,liftImage6,liftImage7,liftImage8,liftImage9,liftImage10,liftImage11,liftImage12,liftImage13,liftImage14,liftImage15,liftImage16,liftImage17,liftImage18,liftImage19,liftImage20,liftImage21 ]; // Add more images to the array

const Page4 = () => {
  const liftRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const liftElement = liftRef.current;

    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const translateY = `${scrollPercentage * 120}vh`;

      liftElement.style.transform = `translateY(${translateY})`;

      const newIndex = Math.min(Math.floor(scrollPercentage * liftImages.length * 3), liftImages.length - 1);
      if (newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative bg-cover bg-center h-[120vh] flex justify-center items-start" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img
        ref={liftRef}
        src={liftImages[currentImageIndex]}
        alt={`Lift ${currentImageIndex + 1}`}
        className="transform w-1/4"
        style={{
          transition: 'transform 0.1s ease-in-out',
          transform: 'translateY(0)', 
        }}
      />
    </div>
  );
};

export default Page4;



