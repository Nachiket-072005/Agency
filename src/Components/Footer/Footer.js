import React from 'react';
import './Footer.css';
import logo from './logo.jpeg';
import { Link} from 'react-router-dom';

export default function Footer() {


  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          
          <a href="/#"><img
            src={logo}
            alt="Tourixaa"
            className="footer-logo"
            
            
          /></a>
          <p>
            Tourixaa is India’s first open travel platform that connects travelers with verified local agencies to deliver personalized and flexible trip experiences.
          </p>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="footer-links">
          <div className="footer-section">
            <h4>Packages</h4>
            <ul>
              <li><Link to="/International">International</Link></li>
            <li><Link to="/underde/Domestic">Domestic</Link></li>
              <li><Link to="/underde/Group Tour">Group Tour</Link></li>
              <li><Link to="/underde/Solo Tour">Solo Tour</Link></li>
             
              <li><Link to="/underde/Nature and Tracking">Nature & Tracking</Link></li>
              <li><Link to="/underde/Maharaja Express">Maharaja Express</Link></li>
              <li><Link to="/underde/Honeymoon Package">Honeymoon Package</Link></li>
              <li><Link to="/underde/Senior Citizen">Senior Citizen</Link></li>
              <li><Link to="/underde/Business Packages">Business Packages</Link></li>
              <li><Link to="/underde/Children Places">Children Places</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><Link to="/underde/Museum">Museum</Link></li>
              <li><Link to="/underde/Video">Video</Link></li>
              <li><Link to="/underde/3D Model">3D Model</Link></li>
              <li><Link to="/underde/360 Video">360 Video</Link></li>
              <li><Link to="/underde/VR Tour">VR Tour</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/underde/Packages">Packages</Link></li>
              <li><Link to="/TourixaaApp">Tourixaa App</Link></li>
              <li><Link to="/Community">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h4>TOURIXAA</h4>
          <p>Nr. Visat three roads, Sabarmati-Koba Highway, Chandkheda,
Ahmedabad, Gujarat
</p>
          <p><i className="fas fa-phone-alt"></i> (+91) 98765 43210</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:tourixaa@gmail.com">tourixaa@gmail.com</a></p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <a href="https://tourixa.vercel.app/" target="_blank" rel="noreferrer">Tourixaa</a> — All Rights Reserved.
        </p>
      </div>
    </div>
  );

}