import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown
} from 'react-icons/fa';
import logo from '../../assets/images/NPS-Kudlu-logo.jpg';
import schoolPoliciesPDF from '../../assets/documents/School_Policy.pdf';
import disasterManagementPDF from '../../assets/documents/Disaster_Management.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMobileDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <header className="school-header">
        {/* Top Bar and Middle Bar remain the same */}
        <div className="top-bar">
            <div className="container">
                <p className="moto"></p>
                <div className="social-icons">
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
        <div className="middle-bar">
            <div className="container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="NPS Kudlu School Logo" className="logo" />
                </Link>
                <div className="contact-details">
                    <div className="contact-item">
                        <FaPhoneAlt className="icon" />
                        <div>
                            <span>For Admission Related Queries</span>
                            <span>Call 9731226002</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <div>
                            <span>Email</span>
                            <span>info@npskudlu.com</span>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <span>148, Silver County Rd, Kudlu, Bengaluru</span>
                            <span>Karnataka – 560068 India</span>
                        </div>
                    </div>
                </div>
                <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>

        {/* Main Navigation (Desktop) */}
        <nav className="main-nav">
          <div className="container">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li className="dropdown">
                    <NavLink to="/about/overview">About Us <FaChevronDown className="dropdown-icon" /></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/about/overview">Overview</NavLink></li>
                        <li><NavLink to="/about/vision-mission">Vision and Mission</NavLink></li>
                        <li><NavLink to="/about/leadership">Leadership</NavLink></li>
                        <li><NavLink to="/about/facilities">Facilities</NavLink></li>
                        <li><NavLink to="/about/school-day">Average School Day</NavLink></li>
                        <li><NavLink to="/about/school-details">School Details</NavLink></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <NavLink to="/programme/scholastic">Programme <FaChevronDown className="dropdown-icon" /></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/programme/scholastic">Scholastic</NavLink></li>
                        <li><NavLink to="/programme/co-scholastic">Co-Scholastic</NavLink></li>
                    </ul>
                </li>
                 <li className="dropdown">
                    <NavLink to="/admission">Admission <FaChevronDown className="dropdown-icon" /></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/admission/kg-montessori">KG & Montessori</NavLink></li>
                        <li><NavLink to="/admission/grades">Grade I - VIII</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/mandatory-disclosure">Mandatory Public Disclosure</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                
                {/* --- UPDATED RESOURCES DROPDOWN --- */}
                <li className="dropdown">
                    <NavLink to="/careers">Resources <FaChevronDown className="dropdown-icon" /></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/careers">Careers</NavLink></li>
                        {/* Use <a> tag for PDFs */}
                        <li><a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer">School Policies</a></li>
                        <li><a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer">Disaster Management</a></li>
                        <li><NavLink to="/resources/blog">Blog</NavLink></li>
                    </ul>
                </li>
                {/* --- END UPDATED RESOURCES DROPDOWN --- */}

                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Panel */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {/* ... other mobile links ... */}
        
        {/* --- UPDATED MOBILE RESOURCES DROPDOWN --- */}
        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('resources')}>
            Resources <FaChevronDown className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'resources' && (
            <div className="mobile-dropdown-menu">
              <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
              {/* Use <a> tag for PDFs in mobile as well */}
              <a href="/document/School_Policy.pdf" target="_blank" rel="noopener noreferrer">School Policies</a>
              <a href="/document/Disaster_Management.pdf" target="_blank" rel="noopener noreferrer">Disaster Management</a>
              <NavLink to="/resources/blog" onClick={closeMenu}>Blog</NavLink>
            </div>
          )}
        </div>
        {/* --- END UPDATED MOBILE RESOURCES DROPDOWN --- */}
        
        <NavLink to="/contact" className="get-in-touch-btn-mobile" onClick={closeMenu}>Contact Us</NavLink>
      </nav>
    </>
  );
};

export default Header;