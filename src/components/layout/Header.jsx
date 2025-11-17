import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown,
  FaEdit, FaUser
} from 'react-icons/fa';

import logo from '../../assets/images/NPS-Kudlu-logo.jpg';
import schoolPoliciesPDF from '../../assets/documents/School_Policy.pdf';
import disasterManagementPDF from '../../assets/documents/Disaster_Management.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
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
      {/* Top + Middle bars grouped inside header so they scroll away */}
      <header className="school-header">

        {/* === TOP BAR === */}
        <div className="top-bar">
          <div className="container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <marquee width="100%" direction="left">
              <p>
                <b>
                  Affiliated to CBSE, Govt of India. New Delhi (CBSE Affiliation No. 831492) |
                  REGISTRATIONS ARE OPEN FOR ADMISSIONS FOR THE ACADEMIC YEAR 2026-27
                </b>
              </p>
            </marquee>

            <div className="top-bar-right-angled">
              <div className="social-icons">
                <a href="#!"><FaFacebookF /></a>
                <a href="#!"><FaTwitter /></a>
                <a href="#!"><FaLinkedinIn /></a>
                <a href="#!"><FaYoutube /></a>
                <a href="#!"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        {/* === MIDDLE BAR === */}
        <div className="middle-bar">
          <div className="container">
            <Link to="/" className="logo-container">
              <img src={logo} alt="School Logo" className="logo" />
            </Link>

            <div className="middle-bar-right">

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
                    <span>148, Silver County Rd, Kudlu – 560068 India</span>
                    <span>Singasandra, Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>

              <div className="floating-action-buttons">
                <Link to="/apply-online" className="action-btn" aria-label="Apply Online" title="Apply Online">
                  <FaEdit />
                </Link>
                <Link to="/login" className="action-btn" aria-label="Parent Login" title="Parent Login">
                  <FaUser />
                </Link>
              </div>

              <button className="mobile-menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>
          </div>
        </div>

      </header>

      {/* ===== MAIN NAV rendered OUTSIDE the <header> element so sticky works reliably ===== */}
      <nav className="main-nav">
        <div className="container" style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>

            <li className="dropdown">
              <a href="#!">About <FaChevronDown className="dropdown-icon" /></a>
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
              <a href="#!">NPS Program <FaChevronDown className="dropdown-icon" /></a>
              <ul className="dropdown-menu">
                <li><NavLink to="/programme/scholastic">Scholastic</NavLink></li>
                <li><NavLink to="/programme/co-scholastic">Co-Scholastic</NavLink></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#!">Admission <FaChevronDown className="dropdown-icon" /></a>
              <ul className="dropdown-menu">
                <li><NavLink to="/admission/kg-montessori">KG & Montessori</NavLink></li>
                <li><NavLink to="/admission/grades">Grade I - VIII</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/mandatory-disclosure">Mandatory Disclosure</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>

            <li className="dropdown">
              <a href="#!">Resources <FaChevronDown className="dropdown-icon" /></a>
              <ul className="dropdown-menu">
                <li><NavLink to="/careers">Careers</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/documents">Other Documents</NavLink></li>
                <li>
                  <a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer">School Policies</a>
                </li>
                <li>
                  <a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer">Disaster Management</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="main-nav-right-angled">
            <Link to="/contact" className="get-in-touch-btn">Contact-US</Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION PANEL (keeps working) --- */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>

        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('about')}>
            About Us <FaChevronDown className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'about' && (
            <div className="mobile-dropdown-menu open">
              <NavLink to="/about/overview" onClick={closeMenu}>Overview</NavLink>
              <NavLink to="/about/vision-mission" onClick={closeMenu}>Vision and Mission</NavLink>
              <NavLink to="/about/leadership" onClick={closeMenu}>Leadership</NavLink>
              <NavLink to="/about/facilities" onClick={closeMenu}>Facilities</NavLink>
              <NavLink to="/about/school-day" onClick={closeMenu}>Average School Day</NavLink>
              <NavLink to="/about/school-details" onClick={closeMenu}>School Details</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('programme')}>
            Programme <FaChevronDown className={`dropdown-icon ${openDropdown === 'programme' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'programme' && (
            <div className="mobile-dropdown-menu open">
              <NavLink to="/programme/scholastic" onClick={closeMenu}>Scholastic</NavLink>
              <NavLink to="/programme/co-scholastic" onClick={closeMenu}>Co-Scholastic</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('admission')}>
            Admission <FaChevronDown className={`dropdown-icon ${openDropdown === 'admission' ? 'open' : ''}`} />
          </button>
          {openDropdown === 'admission' && (
            <div className="mobile-dropdown-menu open">
              <NavLink to="/admission/kg-montessori" onClick={closeMenu}>KG & Montessori</NavLink>
              <NavLink to="/admission/grades" onClick={closeMenu}>Grade I - VIII</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/mandatory-disclosure" onClick={closeMenu}>Mandatory Public Disclosure</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>

        <div className="mobile-dropdown">
          <button onClick={() => handleMobileDropdownToggle('resources')}>
            Resources <FaChevronDown className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`} />
          </button>

          {openDropdown === 'resources' && (
            <div className="mobile-dropdown-menu open">
              <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
              <a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>School Policies</a>
              <a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Disaster Management</a>
              <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
              <NavLink to="/documents" onClick={closeMenu}>Other Documents</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/contact" className="get-in-touch-btn-mobile" onClick={closeMenu}>Contact Us</NavLink>

        <div className="mobile-action-buttons">
          <Link to="/apply-online" className="mobile-action-btn" onClick={closeMenu}>
            <FaEdit /> Apply Online
          </Link>
          <Link to="/login" className="mobile-action-btn" onClick={closeMenu}>
            <FaUser /> Parent Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
