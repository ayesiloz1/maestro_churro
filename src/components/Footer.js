import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SurveyIcon from '../images/survey.png';
import CareerIcon from '../images/career.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2023 Maestro Churro. All rights reserved.</p>
      <div className="social-media-links">
        {/* Links to social media */}
        <a href="https://www.facebook.com/YourPage" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/YourPage" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* Replace with actual Twitter icon if needed */}
        <a href="https://twitter.com/YourPage" className="social-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {/* Internal links for survey and career */}
        <Link to="/survey" className="social-link footer-survey">
          <img src={SurveyIcon} alt="Survey" />
          Survey
        </Link>
        <Link to="/career" className="social-link footer-career">
          <img src={CareerIcon} alt="Career" />
          Career
        </Link>
      </div>
    </footer>
  );
};

export default Footer;