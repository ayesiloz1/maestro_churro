import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BookUsSlider from './Bookus';
import MenuSlider from './Menuslider';
import GallerySlider from './Gallery';
import './Home.css';
import backgroundImage from '../../images/background2.jpg';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '120vh',
  };
   // Slider settings
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add any other settings you might need
  };
  return (
    <div className="home" style={backgroundStyle}>
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to Maestro Churro!</h1>
          <p>
            Delight in the taste of our handcrafted churros, made with love and
            passion. Experience the perfect blend of crispy and soft, sweet and 
            savory, with our unique churro creations that promise to enchant your 
            taste buds.
          </p>
        </section>

        <div className="grid-container">
          <div className="slider-wrapper book-us-slider">
            <BookUsSlider />
          </div>
          <div className="slider-wrapper menu-slider">
            <MenuSlider />
          </div>
          <div className="slider-wrapper gallery-slider">
            <GallerySlider />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
