// MenuSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Churro_Image1 from '../../images/churro.jpeg';
import './Home.css';
// Example slide data for "Menu"
const slidesData = [
  {
    image: Churro_Image1,
    title: 'Special Churros',
    description: 'Try our special flavored churros!'
  },
  {
    image: Churro_Image1,
    title: 'Special Churros',
    description: 'Try our special flavored churros!'
  },
  {
    image: Churro_Image1,
    title: 'Special Churros',
    description: 'Try our special flavored churros!'
  },
];

const MenuSlider = () => {
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
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuSlider;