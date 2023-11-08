import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../images/icon.png';
import './Header.css';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Toggle navigation for small screens
  const toggleNav = () => {
    setIsNavExpanded(prevState => !prevState);
  };

  return (
    <nav className={`header ${isNavExpanded ? 'responsive' : ''}`}>
      <Link to="/" className="header-logo-link" onClick={() => setIsNavExpanded(false)}>
        <img src={logoIcon} alt="Logo" className="header-logo" />
      </Link>
      
      <ul>
        {/* Ensure that each Link component has the onClick event to close the menu after navigation */}
        <li><Link to="/" onClick={toggleNav}>Home</Link></li>
        <li><Link to="/menu" onClick={toggleNav}>Menu</Link></li>
        <li><Link to="/order" onClick={toggleNav}>Order Online</Link></li>
        <li><Link to="/catering" onClick={toggleNav}>Catering</Link></li>
        <li><Link to="/about" onClick={toggleNav}>About Us</Link></li>
        <li><Link to="/contact" onClick={toggleNav}>Contact Us</Link></li>
      </ul>
      
      <button 
        className="icon" 
        onClick={toggleNav} 
        aria-label="Toggle navigation" // for accessibility
      >
        &#9776;
      </button>
    </nav>
  );
}

export default Header;
