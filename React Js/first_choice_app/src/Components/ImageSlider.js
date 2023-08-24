import React, { useState, useEffect } from 'react';

import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import myntra from './Images/myntra.png';


const images = [ myntra,img3, img4, img1, img2 ];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="fw-bold border bg-white text-dark">
        <img className='container-fluid'
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            style={{ maxHeight: '800px' }} // Adjust the height value as needed
        />
</div>


    
  );
};

export default ImageSlider;
