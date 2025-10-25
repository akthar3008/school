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
  const [openDropdown, setOpenDropdown] = useState(null); // Keep track of which mobile dropdown is open

  // Toggles the main mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling the main menu
  };

  // Closes the main mobile menu and resets dropdowns
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggles a specific mobile dropdown
  const handleMobileDropdownToggle = (dropdownName) => {
    // If the clicked dropdown is already open, close it. Otherwise, open it.
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <header className="school-header">
        {/* Top Bar */}
        <div className="top-bar">
            <div className="container">
                <p className="moto"></p> {/* Text is handled by CSS animation */}
                <div className="social-icons">
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="#!" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
        {/* Middle Bar */}
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
                {/* Hamburger Menu Toggle Button */}
                <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Changes icon based on menu state */}
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
                <li className="dropdown">
                    <NavLink to="/careers">Resources <FaChevronDown className="dropdown-icon" /></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/careers">Careers</NavLink></li>
                        <li><a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer">School Policies</a></li>
                        <li><a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer">Disaster Management</a></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        {/* --- NEW LINK ADDED --- */}
                        <li><NavLink to="/documents">Other Documents</NavLink></li>
                        {/* --- END NEW LINK --- */}
                    </ul>
                </li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* --- COMPLETE MOBILE NAVIGATION PANEL --- */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

        {/* Mobile About Us Dropdown */}
        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('about')}>
            About Us <FaChevronDown className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'about' && (
            <div className="mobile-dropdown-menu open"> {/* --- Class 'open' added for visibility --- */}
              <NavLink to="/about/overview" onClick={closeMenu}>Overview</NavLink>
              <NavLink to="/about/vision-mission" onClick={closeMenu}>Vision and Mission</NavLink>
              <NavLink to="/about/leadership" onClick={closeMenu}>Leadership</NavLink>
              <NavLink to="/about/facilities" onClick={closeMenu}>Facilities</NavLink>
              <NavLink to="/about/school-day" onClick={closeMenu}>Average School Day</NavLink>
              <NavLink to="/about/school-details" onClick={closeMenu}>School Details</NavLink>
            </div>
          )}
        </div>

        {/* Mobile Programme Dropdown */}
        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('programme')}>
            Programme <FaChevronDown className={`dropdown-icon ${openDropdown === 'programme' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'programme' && (
            <div className="mobile-dropdown-menu open"> {/* --- Class 'open' added for visibility --- */}
              <NavLink to="/programme/scholastic" onClick={closeMenu}>Scholastic</NavLink>
              <NavLink to="/programme/co-scholastic" onClick={closeMenu}>Co-Scholastic</NavLink>
            </div>
          )}
        </div>

        {/* Mobile Admission Dropdown */}
        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('admission')}>
            Admission <FaChevronDown className={`dropdown-icon ${openDropdown === 'admission' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'admission' && (
            <div className="mobile-dropdown-menu open"> {/* --- Class 'open' added for visibility --- */}
              <NavLink to="/admission/kg-montessori" onClick={closeMenu}>KG & Montessori</NavLink>
              <NavLink to="/admission/grades" onClick={closeMenu}>Grade I - VIII</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/mandatory-disclosure" onClick={closeMenu}>Mandatory Public Disclosure</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>

        {/* Mobile Resources Dropdown */}
        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('resources')}>
            Resources <FaChevronDown className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'resources' && (
            <div className="mobile-dropdown-menu open"> {/* --- Class 'open' added for visibility --- */}
              <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
              <a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>School Policies</a>
              <a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Disaster Management</a>
              <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
              {/* --- NEW LINK ADDED --- */}
              <NavLink to="/documents" onClick={closeMenu}>Other Documents</NavLink>
              {/* --- END NEW LINK --- */}
            </div>
          )}
        </div>

        <NavLink to="/contact" className="get-in-touch-btn-mobile" onClick={closeMenu}>Contact Us</NavLink>
      </nav>
      {/* --- END COMPLETE MOBILE NAVIGATION PANEL --- */}
    </>
  );
};

export default Header;
