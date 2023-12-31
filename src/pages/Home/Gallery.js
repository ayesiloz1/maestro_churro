// GallerySlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Churro_Image1 from '../../images/comingsoon.jpg';

import './Home.css';
// Example slide data for "Gallery"
const slidesData = [
  {
    image: Churro_Image1,
  },

];

const GallerySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      return (
        <div className="slider-container">
          <h2 className="slider-title">Gallery</h2> {/* Slider Title Added Here */}
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div key={index} className="slider-wrapper">
                <img src={slide.image} alt={slide.title} />
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default GallerySlider;
