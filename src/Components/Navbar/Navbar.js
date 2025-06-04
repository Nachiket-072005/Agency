import React from "react";
import './Navbar.css';
import logo from "../../logo.jpeg";
// import logo1 from './logo1.jpeg';
import PropTypes from "prop-types";
import { Link} from 'react-router-dom';
// import Development from "./UnderDevelopment";
// import Aboutus from './Aboutus'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
       <a className="navbar-brand" href="/#">
  <img src={logo} alt="Tourixaa Logo" />
  <span className="brand-text">Tourixaa</span>
</a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Left */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
<img src="https://cdn-icons-png.flaticon.com/128/619/619034.png" alt="Color Home Icon" width="20" />

                <span className="nav-text"> {props.first}</span>
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle active"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://cdn-icons-png.flaticon.com/128/201/201623.png" alt="Tour Package" width="20" />

                <span className="nav-text"> {props.second}</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link active" to="/underde/international">
             <i className="fa-solid fa-globe"></i> International 
                  </Link>
                 
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/domestic"><img src="https://flagcdn.com/w40/in.png" alt="India Flag" width="20" /> Domestic
                  </Link>
                </li>
                
                <li>
                  <Link className="nav-link active" to="/underde/group Tour">
                    <i className="fa-solid fa-people-group"></i> GroupTour
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/Solo Tour">
                   <i className="fa-solid fa-person-hiking"></i> Solo Tour
                  </Link>
                </li>
                
               
                <li>
                  <Link className="nav-link active" to="/underde/Nature and Tracking">
                   <i className="fa-solid fa-tree"></i> Nature and Tracking
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/Maharaja Express">
                    <i className="fa-solid fa-train-subway"></i> Maharaja Express
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/Honeymoon Package">
                    <i className="fa-solid fa-umbrella-beach"></i> Honeymoon Package
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/Senior Citizen">
                   <i className="fa-solid fa-person-cane"></i> Senior Citizen
                  </Link>
                </li>
                
                <li>
                  <Link className="nav-link active" to="/Offers">
                    <i className="fa-solid fa-children"></i> Children Places
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              
             <Link to="/Offers" className="nav-link active">
    <img
      src="https://cdn-icons-png.flaticon.com/128/869/869636.png"
      alt="Colorful Offers Icon"
      width="20"
    />
    <span className="nav-text"> Offers</span>
  </Link>
            </li>
              
              
               <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle active"
    href="/#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img src="https://cdn-icons-png.flaticon.com/128/3448/3448610.png" alt="Travel Guide Icon" width="20" />
    <span className="nav-text"> {props.fourth}</span>
  </a>
  <ul className="dropdown-menu">
    <li>
      <Link className="nav-link active" to="/underde/Ai Tour Planner">
        <img src="https://cdn-icons-png.flaticon.com/128/4380/4380899.png" alt="Ai Tour Planner" width="20" /> Ai Tour Planner
      </Link>
    </li>
    <li>
      <Link className="nav-link active" to="/underde/Plan With Us">
        <img src="https://cdn-icons-png.flaticon.com/128/3612/3612272.png" alt="Plan With Us" width="20" /> Plan With Us 
      </Link>
    </li>
  </ul>
</li>

            {/* dropdown start */}
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><img src="https://cdn-icons-png.flaticon.com/128/2540/2540484.png" alt="Colorful Features Icon" width="20" />

                <span className="nav-text"> {props.fifth}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link active" to="/underde/Museum">
 <img src="https://cdn-icons-png.flaticon.com/128/3936/3936783.png" alt="Museum" width="20" /> Museum
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/Video">
                   <img src="https://cdn-icons-png.flaticon.com/128/1179/1179069.png" alt="Video" width="20" /> Video
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to="/underde/3D Model">
                    <img src="https://cdn-icons-png.flaticon.com/128/2012/2012152.png" alt="3d Model" width="20" /> 3D Model
                  </Link>
                </li>
                 <li>
                  <Link className="nav-link active" to="/underde/360 Video">
                    <img src="https://cdn-icons-png.flaticon.com/128/5510/5510739.png" alt="360 Video" width="20" /> 360 Video
                  </Link>
                </li>
                 <li>
                  <Link className="nav-link active" to="/underde/VR Tour">
                   <img src="https://cdn-icons-png.flaticon.com/128/3612/3612272.png" alt="VR Tour" width="20" /> VR Tour
                  </Link>
                </li>
              </ul>
            </li>
             
           <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><img src="https://cdn-icons-png.flaticon.com/128/2540/2540484.png" alt="Colorful Features Icon" width="20" />

                <span className="nav-text"> Lost Culture</span>
              </a>
              <ul className="dropdown-menu">
               
                 <li>
                  <Link className="nav-link active" to="/underde/Heritage Tour">
                   <img src="https://cdn-icons-png.flaticon.com/128/808/808435.png" alt="Heritage Tour" width="20" /> Heritage Tour 
                  </Link>
                </li>
              </ul>
            </li>




 <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><img src="https://cdn-icons-png.flaticon.com/128/2540/2540484.png" alt="Colorful Features Icon" width="20" />

                <span className="nav-text"> Corporate</span>
              </a>
              <ul className="dropdown-menu">
               
                 <li>
                  <Link className="nav-link active" to="/underde/Heritage Tour">
                   <img src="https://cdn-icons-png.flaticon.com/128/808/808435.png" alt="Heritage Tour" width="20" /> Corporate Packages 
                  </Link>
                </li>
                  <li>
                  <Link className="nav-link active" to="/underde/Heritage Tour">
                   <img src="https://cdn-icons-png.flaticon.com/128/808/808435.png" alt="Heritage Tour" width="20" /> Business Meetings 
                  </Link>
                </li>
              </ul>
            </li>

            
            {/* dropdown end */}
          </ul>

          {/* Right */}
          <div className="ruchit ms-auto">
            <ul className="navbar-nav d-flex flex-column flex-lg-row">
            
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                 <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Colorful Profile Icon" width="20" />

                  <span className="nav-text">&nbsp;Profile</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  fifth: PropTypes.string.isRequired,
};

