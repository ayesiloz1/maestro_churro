import React from 'react';
import BookUsSlider from './Bookus';
import GallerySlider from './Gallery';
import './Home.css';
import heroVideo from '../../images/hero.mp4'; 

function Home() {
  return (
    <div className="home">
      <main>
        <section id="hero-section">
          <video autoPlay muted loop>
            <source src={heroVideo} type="video/mp4" /> {/* Use curly braces for variable */}
            Your browser does not support the video tag.
          </video>
        </section>

        <div className="grid-container">
          <div className="slider-wrapper book-us-slider">
            <BookUsSlider />
          </div>
          <div className="slider-wrapper gallery-slider">
            <GallerySlider />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
