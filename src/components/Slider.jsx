import React, { useState } from 'react';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from '../Assest/img1.jpg';
import img2 from '../Assest/img2.jpg';
import img3 from '../Assest/img3.jpg';
import img4 from '../Assest/img4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const images = [img1, img2, img3, img4];
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 2 slides on screens smaller than 768px
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on screens smaller than 480px
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className='mt-4'>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} width={200} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
