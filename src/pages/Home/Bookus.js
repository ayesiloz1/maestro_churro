
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Churro_Image1 from '../../images/wedding.jpg';
import Churro_Image2 from '../../images/festival.jpeg';
import Churro_Image3 from '../../images/corporate.jpg';
import Churro_Image4 from '../../images/private.jpg';
import './slider.css';
import { Link } from 'react-router-dom';

const slidesData = [
  {
    image: Churro_Image1,
    title: 'Weddings',
  },
  {
    image: Churro_Image2,
    title: 'Festivals',
  },
  {
    image: Churro_Image3,
    title: 'Corporate Events',

  },
  {
    image: Churro_Image4,
    title: 'Private Events',

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
            <div className="slide-caption">
              <h3 className="slide-title">{slide.title}</h3>
              {/* Optional: Add description or other elements here */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BookUsSlider;
