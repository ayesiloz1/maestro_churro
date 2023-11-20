// BookUsSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Churro_Image3 from '../../images/Churro.png';
import Churro_Image2 from '../../images/Wedding.png';
import Churro_Image1 from '../../images/Festival.png';
import './slider.css';
import { Link } from 'react-router-dom';
const slidesData = [
  {
    image: Churro_Image1,
  },
  {
    image: Churro_Image2,
  },
  {
    image: Churro_Image3,

  }
];

const BookUsSlider = () => {
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
    <h2 className="slider-title">
      <Link to="/bookus" className="book-now-link">Book Now</Link>
    </h2>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slider-wrapper">
            <img src={slide.image} alt={slide.title} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BookUsSlider;
