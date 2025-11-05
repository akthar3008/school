import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// It's a good practice to use an icon library for icons
import { FaGraduationCap, FaUsers, FaLightbulb, FaBrain, FaArrowRight, FaQuoteLeft, FaEnvelope, FaPhone } from 'react-icons/fa';

// Import the slider images from your assets folder
import slider2 from '../assets/images/slider2.jpg';
import slider4 from '../assets/images/slider4.jpg';
import slider6 from '../assets/images/slider6.jpg';
import slider8 from '../assets/images/slider8.jpg';
import slider9 from '../assets/images/slider9.jpg';
import slider10 from '../assets/images/slider10.jpg';
import slider11 from '../assets/images/slider11.jpg';
import slider12 from '../assets/images/slider12.jpg';
import slider13 from '../assets/images/slider13.jpg';
import slider14 from '../assets/images/slider14.jpg';

// Import section-specific images
import npskudlu from '../assets/images/npskudlu.jpg';
import philisophy from '../assets/images/philisophy.jpg';
import life_skills from '../assets/images/life_skills.jpg';
import sports from '../assets/images/teacher-training.png';
import square from '../assets/images/square.jpg';
import square1 from '../assets/images/square1.jpg';
import square2 from '../assets/images/square2.jpg';
import square3 from '../assets/images/square3.jpg';
import arts from '../assets/images/arts.jpg';
import earlyyears from '../assets/images/earlyyears.png';
import middleyears from '../assets/images/middleyears.png';
import msgschairman300x300 from '../assets/images/msgschairman300x300.jpg';
import physical_education from '../assets/images/physical_education.jpg';
import primaryyears from '../assets/images/primaryyears.png';


// --- NEW COMPONENT: Progressive Registration Form (UNCHANGED) ---
const RegistrationForm = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        class: ''
    });

    const [captcha, setCaptcha] = useState('');
    const [captchaValue, setCaptchaValue] = useState('7cd8a8'); // Static Captcha for example

    // Handler for all input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    // Simple form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (captcha !== captchaValue) {
            alert("Captcha is incorrect!");
            return;
        }
        console.log("Form Submitted:", formData);
        alert("Enquiry Submitted Successfully!");
        // Logic to reset form or navigate away
    };

    // Derived state for progressive field visibility
    const isNameValid = formData.name.length > 2;
    // Simple email validation
    const isEmailValid = isNameValid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email); 
    // Basic mobile length check
    const isMobileValid = isEmailValid && formData.mobile.length === 10; 
    const isClassSelected = isMobileValid && formData.class !== '';
    const isFormReady = isClassSelected && captcha.length === captchaValue.length;

    return (
        <div className="registration-form-box">
            <h3 className="form-title">Quick Admission Enquiry</h3>
            
            <form onSubmit={handleSubmit}>
                {/* 1. Name Field (Always Visible) */}
                <div className="form-group">
                    <label htmlFor="name">Enter Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        required
                    />
                </div>

                {/* 2. Email Field (Visible only if Name is filled) */}
                {isNameValid && (
                    <div className="form-group slide-in">
                        <label htmlFor="email">Enter Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                )}

                {/* 3. Mobile Number Field (Visible only if Email is valid) */}
                {isEmailValid && (
                    <div className="form-group slide-in">
                        <label htmlFor="mobile">Enter Mobile Number *</label>
                        <div className="mobile-input-group">
                            <span className="country-code">+91</span>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number (10 digits)"
                                maxLength="10"
                                pattern="\d{10}"
                                required
                            />
                        </div>
                    </div>
                )}
                
                {/* 4. Class Selection Dropdown (Visible only if Mobile is filled) */}
                {isMobileValid && (
                    <div className="form-group slide-in">
                        <label htmlFor="class">Select Class Applying For *</label>
                        <select
                            id="class"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Class AY 2026-27</option>
                            <option value="Montessori">Montessori</option>
                            <option value="KG">Kindergarten</option>
                            <option value="Grade I">Grade I</option>
                            <option value="Grade VIII">Grade VIII</option>
                        </select>
                    </div>
                )}
                
                {/* 5. Captcha and Submit (Visible only if Class is selected) */}
                {isClassSelected && (
                    <>
                        <div className="form-group full-width captcha-group slide-in">
                            <div className="captcha-display">{captchaValue}</div>
                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                value={captcha}
                                onChange={(e) => setCaptcha(e.target.value)}
                                placeholder="Enter Captcha"
                                maxLength={captchaValue.length}
                                required
                            />
                        </div>

                        <button type="submit" className="enquire-submit-btn" disabled={!isFormReady}>
                            Submit Enquiry
                        </button>
                    </>
                )}
            </form>

            <div className="admission-contact">
                <p>or call us directly:</p>
                <p><FaPhone /> **+91 97312 26002**</p>
                <p><FaEnvelope /> info@npskudlu.com</p>
            </div>
        </div>
    );
};
// --- END NEW COMPONENT ---


// --- NEW COMPONENT: Map Section ---
const MapSection = () => {
    // NOTE: This URL is used as requested but will likely show "refused to connect".
    // TO FIX: Replace the value of mapUrl with a Google Maps embed URL starting with 
    // "https://www.google.com/maps/embed?pb=..." obtained directly from Google Maps.
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43162.98495093647!2d77.64145007791561!3d12.890155915755637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae139e51d557e5%3A0xc499e62ff7625a06!2sNational%20Public%20School%2C%20Kudlu!5e0!3m2!1sen!2sin!4v1762351834151!5m2!1sen!2sin";
    return (
        <section className="map-section">
            <div className="container">
                <h2 className="map-title">Find Our Location</h2>
            </div>
            <div className="map-responsive-container">
                <iframe 
                    src={mapUrl} 
                    title="School Location Map"
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};
// --- END NEW COMPONENT ---


const HomePage = () => {
    // Array of all slider images
    const slides = [slider2, slider4, slider6, slider8, slider9, slider10, slider11, slider12, slider13, slider14];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set an interval to advance the slide every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div className="homepage-container">
            {/* Hero Section with Automatic Image Slider */}
            <section className="hero-section">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                ))}
            </section>

            {/* School Info Section (Image, Form, and Text Card) - MODIFIED LAYOUT */}
            <section className="school-info-section container">
                
                {/* 1. Form Container (New Top Element - Now Right Aligned/Reduced Width) */}
                <div className="form-container-top">
                    <RegistrationForm />
                </div>
                
                {/* 2. Building Image Card (Original Left Element) */}
                <div className="school-building-card">
                    <img src={npskudlu} alt="National Public School Kudlu campus" />
                </div>
                
                {/* 3. Static Admissions Info Card (Original Right Element) */}
                <div className="admissions-card original-style">
                    <h3>Academic year 2026-27</h3>
                    <p>
                        Registration for admission for the Academic year 2026-27 open for Montessori to Grade VIII.
                        For Admission Please Contact +91 97312 26002.
                        Contact Email: info@npskudlu.com
                    </p>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section container">
                <h2>Welcome to</h2>
                <h1>National Public School - Kudlu</h1>
                <p>
                    National Public School Kudlu offers a distinctive blend of high-quality, holistic education, empowering students to thrive academically, socially, and creatively. As one of the top CBSE schools in Bangalore, our institution is committed to nurturing each student's potential through a diverse range of programs and opportunities.
                </p>
            </section>

            {/* Features Section */}
            <section className="features-section container">
                <div className="feature-item">
                    <FaGraduationCap className="feature-icon" />
                    <h3>Excellence in Education</h3>
                    <p>Experience top-notch holistic education at National Public School, Kudlu.</p>
                </div>
                <div className="feature-item">
                    <FaUsers className="feature-icon" />
                    <h3>Multi-Dimensional Development</h3>
                    <p>Foster intellectual, emotional, social, physical, and creative growth in every student.</p>
                </div>
                <div className="feature-item">
                    <FaLightbulb className="feature-icon" />
                    <h3>Empowering Future Leaders</h3>
                    <p>Nurturing students to become socially responsible, independent, and knowledgeable leaders.</p>
                </div>
                <div className="feature-item">
                    <FaBrain className="feature-icon" />
                    <h3>21st Century Skills</h3>
                    <p>Equip students with essential skills and competencies for success in today's world.</p>
                </div>
            </section>

             {/* Exceptional Co-scholastic Section */}
             <section className="co-scholastic-section container">
                <h3>Exceptional Co-scholastic Programs</h3>
                <p>
                    Explore a diverse range of activities from arts and physical education to life skills and newspaper education.
                </p>
                <Link to="/programme/co-scholastic" className="read-more-link">
                 <FaArrowRight />
                </Link>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy-section">
                <div className="container">
                    <div className="philosophy-card">
                        <div className="philosophy-image">
                            <img src={philisophy} alt="Students in a classroom" />
                        </div>
                        <h2>Our Philosophy</h2>
                        <p>
                            At NPS, we believe in fostering a love for learning by nurturing the intellectual, emotional, social, physical, and creative potentials of our students. Through innovative teaching methodologies and a comprehensive curriculum, we strive to inspire curiosity, critical thinking, and a sense of responsibility in each learner.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-section">
                <div className="container">
                    <h4>Leadership</h4>
                    <h2>Message from Leadership</h2>
                    <div className="chairman-message-card">
                        <h3>A Message from Our Chairman</h3>
                        <div className="chairman-content">
                            <div className="chairman-photo">
                                <img src={msgschairman300x300} alt="Dr. K. P. Gopalakrishna, Chairman" />
                            </div>
                            <div className="chairman-text">
                                <p><strong>Dr. K. P. Gopalakrishna</strong></p>
                                <p className="chairman-title">Chairman, NPS Group of Institutions</p>
                                <p>
                                    Few things have greater importance to parents than the education of their children. To be successful in life, academic excellence, good values, and discipline are essential for every child. Choosing the right school for them is therefore a crucial decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Co-Scholastic Programs Section */}
            <section className="program-section container">
                <h4>Co-Scholastic Programs</h4>
                <h2>Unlocking Potential Beyond Academics</h2>
                <div className="program-cards-container">
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={arts} alt="Students in a drama class" />
                        </div>
                        <h3>Arts</h3>
                        <p>Education</p>
                        <Link to="/arts" className="know-more-link"></Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={physical_education} alt="Students playing sports" />
                        </div>
                        <h3>Physical</h3>
                        <p>Education</p>
                        <Link to="/physical-education" className="know-more-link"></Link>
                    </div>
                     <div className="program-card">
                        <div className="program-card-image">
                            <img src={life_skills} alt="Students collaborating" />
                        </div>
                        <h3>Life Skills</h3>
                        <p>Education</p>
                        <Link to="/life-skills" className="know-more-link"></Link>
                    </div>
                </div>
            </section>

             {/* Scholastic Programme Section */}
            <section className="program-section container" style={{paddingTop: 0}}>
                <h4>Scholastic Programme</h4>
                <h2>Board and Curriculum</h2>
                <div className="program-cards-container">
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={earlyyears} alt="Young students in Montessori" />
                        </div>
                        <h3>Early Years</h3>
                        <p>Montessori & Kindergarten</p>
                        <Link to="/early-years" className="know-more-link"></Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={primaryyears} alt="Primary school students reading" />
                        </div>
                        <h3>Primary Years</h3>
                        <p>An Integrated Curriculum</p>
                        <Link to="/primary-years" className="know-more-link"></Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={middleyears} alt="Middle school students in class" />
                        </div>
                        <h3>Middle Years</h3>
                        <p>A Broad-Based Curriculum</p>
                        <Link to="/middle-years" className="know-more-link"></Link>
                    </div>
                </div>
            </section>

            {/* Join Us Today Section */}
            <section className="join-us-section">
                <div className="container">
                    <h2>Join Us Today!</h2>
                    <h3>Experience the Difference at NPS Kudlu</h3>
                    <p>Join us at National Public School Kudlu and embark on a journey of transformative learning. Together, let's inspire, empower, and shape the bright futures of tomorrow.</p>
                    <div className="join-us-gallery">
                        <img src={square} alt="Student gallery 1"/>
                        <img src={square1} alt="Student gallery 2"/>
                        <img src={square2} alt="Student gallery 3"/>
                        <img src={square3} alt="Student gallery 4"/>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h4>Testimonials</h4>
                    <h2>What Parents Say About Us</h2>
                    <div className="testimonial-card">
                        <FaQuoteLeft className="quote-icon"/>
                        <p className="testimonial-text">
                            The best CBSE School in Bangalore - NPS Kudlu is one of the top schools with an exceptional faculty, innovative curriculum, inclusive environment, and a wide range of co-scholastic programs fostering a strong parent-school partnership. Our child is flourishing academically and has shown great character development.
                        </p>
                        <p className="testimonial-author">- Ms. Mary Christy</p>
                    </div>
                </div>
            </section>

            {/* Teacher Training Section */}
            <section className="teacher-training-section container">
                <h4>Teacher Training</h4>
                <h2>Continuous Professional Development</h2>
                <div className="training-image">
                    <img src={sports} alt="Teachers in a training session" />
                </div>
                <p>
                    NPS lays a huge emphasis on enhancing teacher's skills through continuous professional development courses.
                </p>
                <p>
                    NPS believes teachers, like students, are life-long learners. It is a core conviction of our institution that teachers can have an impact on the physical, mental and moral well-being of a student through value-based learning.
                </p>
            </section>
            
            {/* --- MAP SECTION ADDED HERE --- */}
            <MapSection /> 

        </div>
    );
};

export default HomePage;
