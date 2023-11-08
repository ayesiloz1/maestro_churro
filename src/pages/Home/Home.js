import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Home.css';
import backgroundImage from '../../images/background2.jpg';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust the height as needed
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
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
