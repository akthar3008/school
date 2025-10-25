import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/images/NPS-Kudlu-logo.jpg'; 

// --- IMPORT PDFs ---
import schoolPoliciesPDF from '../../assets/documents/School_Policy.pdf';
import disasterManagementPDF from '../../assets/documents/Disaster_Management.pdf';
// --- END IMPORTS ---

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo-section">
                        <img src={logo} alt="National Public School Kudlu" className="footer-logo" />
                        <h3>NATIONAL PUBLIC SCHOOL</h3>
                        <p>KUDLU - CBSE AFFILIATION NO. 831492</p>
                        <div className="footer-social-icons">
                            <a href="#!" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#!" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#!" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#!" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="#!" aria-label="Pinterest"><FaPinterestP /></a>
                            <a href="#!" aria-label="YouTube"><FaYoutube /></a>
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4>Home</h4>
                            <ul>
                                {/* --- FIXED LINKS --- */}
                                <li><Link to="/about/overview">About</Link></li>
                                <li><Link to="/about/overview">Overview</Link></li>
                                <li><Link to="/about/vision-mission">Vision and Mission</Link></li>
                                <li><Link to="/about/leadership">Leadership</Link></li>
                                <li><Link to="/about/facilities">Facilities</Link></li>
                                <li><Link to="/about/school-details">School Details</Link></li>
                                {/* --- END FIXED LINKS --- */}
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Programme</h4>
                            <ul>
                                {/* --- FIXED LINKS --- */}
                                <li><Link to="/programme/scholastic">Scholastic Programme</Link></li>
                                <li><Link to="/programme/co-scholastic">Co-Scholastic Programme</Link></li>
                                {/* --- END FIXED LINKS --- */}
                            </ul>
                            <h4>Admission</h4>
                            <ul>
                                {/* --- FIXED LINKS --- */}
                                <li><Link to="/admission/kg-montessori">KG I, KG II & Montessori</Link></li>
                                <li><Link to="/admission/grades">Grade I - VIII</Link></li>
                                {/* --- END FIXED LINKS --- */}
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><Link to="/careers">Careers</Link></li>
                                {/* --- FIXED PDF LINKS --- */}
                                <li><a href={schoolPoliciesPDF} target="_blank" rel="noopener noreferrer">School Policies</a></li>
                                <li><a href={disasterManagementPDF} target="_blank" rel="noopener noreferrer">Disaster Management</a></li>
                                {/* --- END FIXED PDF LINKS --- */}
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/documents">Other Documents</Link></li>
                            </ul>
                        </div>
                         <div className="footer-column">
                            <h4>Gallery</h4>
                            <ul>
                                {/* --- FIXED LINK --- */}
                                <li><Link to="/gallery">Events</Link></li>
                                {/* --- END FIXED LINK --- */}
                            </ul>
                             <h4>Others</h4>
                            <ul>
                                {/* --- FIXED LINK --- */}
                                <li><Link to="/mandatory-disclosure">Mandatory Public Disclosure</Link></li>
                                {/* --- END FIXED LINK --- */}
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-contact-info">
                        <h4>Contact Us</h4>
                        <p>148, Silver County Rd, Kudlu, Singasandra, Bengaluru, Karnataka — 560068 India</p>
                        <p><strong>Phone:</strong> +91 97312 26002</p>
                        <p><strong>Email:</strong> info@npskudlu.com</p>
                    </div>
                    <div className="footer-legal">
                        <p>© {new Date().getFullYear()} All rights reserved</p>
                        <div className="footer-legal-links">
                            <Link to="/terms">Terms and Conditions</Link>
                            <Link to="/cancellation">Cancellation/Refund Policy</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>
                        <p>Designed by EMS Webtech</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
