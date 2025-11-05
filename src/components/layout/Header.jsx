import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown,
  FaEdit, FaUser // <-- Icons are imported
} from 'react-icons/fa';
// Make sure to update this logo path if needed
import logo from '../../assets/images/NPS-Kudlu-logo.jpg'; 
import schoolPoliciesPDF from '../../assets/documents/School_Policy.pdf';
import disasterManagementPDF from '../../assets/documents/Disaster_Management.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // --- ROBUST SCROLL LOGIC ---
  const [navVisible, setNavVisible] = useState(true); // Track visibility
  const lastScrollY = useRef(0);
  const scrollBuffer = 10; // Only change state after scrolling 10px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 200; // How far to scroll before hiding (approx height of top bars)

      // 1. Always show nav if at the top of the page
      if (currentScrollY <= scrollThreshold) {
        setNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 2. Do nothing if scrolling less than the buffer (prevents flicker)
      if (Math.abs(currentScrollY - lastScrollY.current) < scrollBuffer) {
        return;
      }

      // 3. Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current) {
        // Scrolling Down
        setNavVisible(false);
      } else {
        // Scrolling Up
        setNavVisible(true);
      }
      
      // Update last scroll position
      lastScrollY.current = currentScrollY < 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array so it only runs on mount
  // --- END SCROLL LOGIC ---


  // Toggles the main mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
    setOpenDropdown(null); // Close any open dropdowns when main menu toggles
  };

  // Closes the main mobile menu and resets dropdowns
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggles a specific mobile dropdown
  const handleMobileDropdownToggle = (dropdownName) => {
    // If the clicked dropdown is already open, close it. Otherwise, open the new one.
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <header className="school-header">
        
        {/* === TOP BAR === */}
        <div className="top-bar">
          <div className="container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <marquee width="100%" direction="left">
              <p><b>Affiliated to CBSE, Govt of India. New Delhi (CBSE Affiliation No. 831492) | REGISTRATIONS ARE OPEN FOR ADMISSIONS FOR THE ACADEMIC YEAR 2026-27</b></p>  
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
            
            {/* --- WRAPPER for all items on the right --- */}
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

              {/* --- FLOATING ACTION BUTTONS (DESKTOP) --- */}
              <div className="floating-action-buttons">
                {/* --- UPDATED LINK --- */}
                <Link to="/apply-online" className="action-btn" aria-label="Apply Online" title="Apply Online">
                  <FaEdit />
                </Link>
                <Link to="/login" className="action-btn" aria-label="Parent Login" title="Parent Login">
                  <FaUser />
                </Link>
              </div>
              
              {/* --- Mobile menu toggle moved inside wrapper --- */}
              <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div> {/* --- End .middle-bar-right --- */}

          </div>
        </div>

        {/* === MAIN NAVIGATION (Desktop) === */}
        <nav className={`main-nav ${navVisible ? 'nav-sticky' : 'nav-hidden'}`}>
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
                  <a href="#!">NPS Program<FaChevronDown className="dropdown-icon" /></a>
                  <ul className="dropdown-menu">
                      <li><NavLink to="/programme/scholastic">Scholastic</NavLink></li>
                      <li><NavLink to="/programme/co-scholastic">Co-Scholastic</NavLink></li>
                  </ul>
              </li>

              <li className="dropdown">
                  <a href="#!">Admission<FaChevronDown className="dropdown-icon" /></a>
                  <ul className="dropdown-menu">
                      <li><NavLink to="/admission/kg-montessori">KG & Montessori</NavLink></li>
                      <li><NavLink to="/admission/grades">Grade I - VIII</NavLink></li>
                  </ul>
              </li>

              <li><NavLink to="/mandatory-disclosure">Mandatory Disclosure</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>

              <li className="dropdown">
                  <a href="#!">Resources<FaChevronDown className="dropdown-icon" /></a>
                  <ul className="dropdown-menu">
                      <li><NavLink to="/careers">Careers</NavLink></li>
                      <li><NavLink to="/blog">Blog</NavLink></li>
                      <li><NavLink to="/documents">Other Documents</NavLink></li>
                      <li>
                        <a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer">
                          School Policies
                        </a>
                      </li>
                      <li>
                        <a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer">
                          Disaster Management
                        </a>
                      </li>
                  </ul>
              </li>
            </ul>

            <div className="main-nav-right-angled">
              <Link to="/contact" className="get-in-touch-btn">Contact-US</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* --- MOBILE NAVIGATION PANEL --- */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
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
        
        {/* --- ADDED: Mobile-specific action buttons --- */}
        <div className="mobile-action-buttons">
           {/* --- UPDATED LINK --- */}
          <Link to="/apply-online" className="mobile-action-btn" onClick={closeMenu}>
            <FaEdit /> Apply Online
          </Link>
          <Link to="/login" className="mobile-action-btn" onClick={closeMenu}>
            <FaUser /> Parent Login
          </Link>
        </div>

      </nav>
      {/* --- END COMPLETE MOBILE NAVIGATION PANEL --- */}
    </>
  );
};

export default Header;
