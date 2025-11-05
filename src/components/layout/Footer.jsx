import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPinterestP, 
    FaPhone, FaEnvelope, FaMapMarkerAlt,
    FaChevronRight // <-- NEW ICON IMPORTED
} from 'react-icons/fa'; 
import logo from '../../assets/images/NPS-Kudlu-logo.jpg'; 

// --- IMPORT PDFs ---
import schoolPoliciesPDF from '../../assets/documents/School_Policy.pdf';
import disasterManagementPDF from '../../assets/documents/Disaster_Management.pdf';
// --- END IMPORTS ---

// --- HELPER COMPONENT FOR CONSISTENT LIST ITEM STYLING ---
const FooterLink = ({ to, text, isExternal = false }) => {
    const content = (
        <>
        <FaChevronRight classname="footer-right-icon"/>
            <span className="footer-link-text">{text}</span>
        </>
    );

    if (isExternal) {
        return (
            <li>
                <a href={to} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            </li>
        );
    }

    return (
        <li>
            <Link to={to}>
                {content}
            </Link>
        </li>
    );
};
// --- END HELPER COMPONENT ---


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    
                    {/* 1. Left Logo and Social Column */}
                    <div className="footer-logo-section">
                        {/* Logo is styled via CSS to match the size/look */}
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
                    
                    {/* 2. Top Right Contact Details Column */}
                    <div className="footer-contact-info-new">
                        
                        <div className="contact-item-new">
                            <FaPhone className="contact-icon-new" />
                            <div className="contact-text-new">
                                <h4>Phone</h4>
                                <p>(+91) 97317 76002</p>
                            </div>
                        </div>

                        <div className="contact-item-new">
                            <FaEnvelope className="contact-icon-new" />
                            <div className="contact-text-new">
                                <h4>Mail</h4>
                                <p>info@npskudlu.com</p>
                            </div>
                        </div>

                        <div className="contact-item-new">
                            <FaMapMarkerAlt className="contact-icon-new" />
                            <div className="contact-text-new">
                                <h4>NPS Campuses</h4>
                                <p>Singasandra, Bengaluru, Karnataka</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Horizontal Line Break is handled by CSS grid structure now */}
                    
                    {/* 3. Footer Links Grid (Using new Helper Component) */}
                    <div className="footer-links-grid-new">
                        
                        <div className="footer-column">
                            <h4>About Us</h4> 
                            <ul>
                                <FooterLink to="/about/overview" text="Overview" />
                                <FooterLink to="/about/vision-mission" text="Vision and Mission" />
                                <FooterLink to="/about/leadership" text="Leadership" />
                                <FooterLink to="/about/facilities" text="Facilities" />
                                <FooterLink to="/about/school-day" text="Average School Day" />
                                <FooterLink to="/about/school-details" text="School Details" />
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h4>Academics & Admissions</h4>
                            <ul>
                                <FooterLink to="/programme/scholastic" text="Scholastic Programme" />
                                <FooterLink to="/programme/co-scholastic" text="Co-Scholastic Programme" />
                                <FooterLink to="/admission/kg-montessori" text="KG & Montessori Admission" />
                                <FooterLink to="/admission/grades" text="Grade I - VIII Admission" />
                                <FooterLink to="/mandatory-disclosure" text="Mandatory Public Disclosure" />
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h4>Resources & Policies</h4>
                            <ul>
                                <FooterLink to="/careers" text="Careers" />
                                <FooterLink to="/blog" text="Blog" />
                                <FooterLink to={schoolPoliciesPDF} text="School Policies" isExternal={true} />
                                <FooterLink to={disasterManagementPDF} text="Disaster Management" isExternal={true} />
                                <FooterLink to="/documents" text="Other Documents" />
                                <FooterLink to="/terms" text="Terms & Condition" />
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <FooterLink to="/contact" text="Contact Us" />
                                <FooterLink to="/gallery" text="Gallery" />
                                <FooterLink to="/faq" text="FAQ" />
                                <FooterLink to="/privacy" text="Privacy Policy" />
                                <FooterLink to="/cancellation" text="Cancellation/Refund Policy" />
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
                {/* 4. Footer Bottom (Copyright) */}
                <div className="footer-bottom footer-bottom-new">
                    <p>© {new Date().getFullYear()} All rights reserved. NPS Kudlu</p>
                    <div className="connect-button-wrapper">
                        <Link to="/contact" className="connect-with-us-btn">CONNECT WITH US</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
