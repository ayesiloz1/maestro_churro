import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../images/icon.png';
import './Header.css';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(prevState => !prevState);
  };

  return (
    <header className={`header ${isNavExpanded ? 'responsive' : ''}`}>
      {/* Logo */}
      <Link to="/" className="header-logo-link" onClick={() => setIsNavExpanded(false)}>
        <img src={logoIcon} alt="Logo" className="header-logo" />
      </Link>

      {/* Navigation Links */}
      <nav className="header-nav">
        <ul>
          {/* Ensure that each Link component has the onClick event to close the menu after navigation */}
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/menu" onClick={toggleNav}>Menu</Link></li>
          <li><Link to="/order" onClick={toggleNav}>Order Online</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <button 
        className="icon" 
        onClick={toggleNav} 
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
      
    </header>
    
  );
}

export default Header;
