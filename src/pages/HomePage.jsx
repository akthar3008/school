import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaBrain,
  FaArrowRight,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

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

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', class: '' });
  const [captcha, setCaptcha] = useState('');
  const [captchaValue, setCaptchaValue] = useState('7cd8a8');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha !== captchaValue) {
      alert('Captcha is incorrect!');
      return;
    }
    alert('Enquiry Submitted Successfully!');
  };

  const isNameValid = formData.name.length > 2;
  const isEmailValid = isNameValid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isMobileValid = isEmailValid && formData.mobile.length === 10;
  const isClassSelected = isMobileValid && formData.class !== '';
  const isFormReady = isClassSelected && captcha.length === captchaValue.length;

  return (
    <div className="registration-form-box">
      <h3 className="form-title">Quick Admission Enquiry</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" required />
        </div>

        {isNameValid && (
          <div className="form-group slide-in">
            <label htmlFor="email">Enter Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
          </div>
        )}

        {isEmailValid && (
          <div className="form-group slide-in">
            <label htmlFor="mobile">Enter Mobile Number *</label>
            <div className="mobile-input-group">
              <span className="country-code">+91</span>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="10-digit Mobile" maxLength="10" required />
            </div>
          </div>
        )}

        {isMobileValid && (
          <div className="form-group slide-in">
            <label htmlFor="class">Select Class Applying For *</label>
            <select id="class" name="class" value={formData.class} onChange={handleChange} required>
              <option value="">Select Class AY 2026-27</option>
              <option value="Montessori">Montessori</option>
              <option value="KG">Kindergarten</option>
              <option value="Grade I">Grade I</option>
              <option value="Grade VIII">Grade VIII</option>
            </select>
          </div>
        )}

        {isClassSelected && (
          <>
            <div className="form-group full-width captcha-group slide-in">
              <div className="captcha-display">{captchaValue}</div>
              <input type="text" id="captcha" name="captcha" value={captcha} onChange={(e) => setCaptcha(e.target.value)} placeholder="Enter Captcha" maxLength={captchaValue.length} required />
            </div>

            <button type="submit" className="enquire-submit-btn" disabled={!isFormReady}>
              Submit Enquiry
            </button>
          </>
        )}
      </form>

      <div className="admission-contact">
        <p>or call us directly:</p>
        <p><FaPhone /> +91 97312 26002</p>
        <p><FaEnvelope /> info@npskudlu.com</p>
      </div>
    </div>
  );
};

const MapSection = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43162.98495093647!2d77.64145007791561!3d12.890155915755637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae139e51d557e5%3A0xc499e62ff7625a06!2sNational%20Public%20School%2C%20Kudlu!5e0!3m2!1sen!2sin!4v1762351834151!5m2!1sen!2sin";
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

const HomePage = () => {
  const slides = [slider2, slider4, slider6, slider8, slider9, slider10, slider11, slider12, slider13, slider14];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="homepage-container">
      <section className="hero-section">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${slide})` }}></div>
        ))}
      </section>

      <section className="school-info-section container">
        <div className="form-container-top">
          <RegistrationForm />
        </div>
        <div className="school-building-card">
          <img src={npskudlu} alt="NPS Kudlu Building" />
        </div>
        <div className="admissions-card original-style">
          <h3>Academic Year 2026-27</h3>
          <p>
            Registrations open for Montessori to Grade VIII. For enquiries, contact <strong>+91 97312 26002</strong> or email <strong>info@npskudlu.com</strong>.
          </p>
        </div>
      </section>

      <section className="welcome-section container">
        <h2>Welcome to</h2>
        <h1>National Public School - Kudlu</h1>
        <p>
          National Public School Kudlu offers holistic education that empowers students to thrive academically, socially, and creatively.
        </p>
      </section>

      <section className="features-section container">
        <div className="feature-item"><FaGraduationCap className="feature-icon" /><h3>Excellence in Education</h3><p>Experience top-notch education at NPS Kudlu.</p></div>
        <div className="feature-item"><FaUsers className="feature-icon" /><h3>Multi-Dimensional Growth</h3><p>Fostering academic, social, and creative excellence.</p></div>
        <div className="feature-item"><FaLightbulb className="feature-icon" /><h3>Empowering Future Leaders</h3><p>Nurturing independent and responsible individuals.</p></div>
        <div className="feature-item"><FaBrain className="feature-icon" /><h3>21st Century Skills</h3><p>Equipping learners for future challenges.</p></div>
      </section>

      <section className="co-scholastic-section container">
        <h3>Exceptional Co-scholastic Programs</h3>
        <p>Explore activities from arts to life skills and physical education.</p>
        <Link to="/programme/co-scholastic" className="read-more-link"><FaArrowRight /></Link>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-card">
            <div className="philosophy-image"><img src={philisophy} alt="Students in class" /></div>
            <h2>Our Philosophy</h2>
            <p>
              At NPS, we nurture curiosity, critical thinking, and creativity by promoting lifelong learning through innovation and empathy.
            </p>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <h4>Leadership</h4>
          <h2>Message from Leadership</h2>
          <div className="chairman-message-card">
            <h3>A Message from Our Chairman</h3>
            <div className="chairman-content">
              <div className="chairman-photo"><img src={msgschairman300x300} alt="Chairman" /></div>
              <div className="chairman-text">
                <p><strong>Dr. K. P. Gopalakrishna</strong></p>
                <p className="chairman-title">Chairman, NPS Group of Institutions</p>
                <p>Academic excellence, values, and discipline form the foundation of every child’s success. Choosing the right school is vital for shaping that journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="program-section container">
        <h4>Co-Scholastic Programs</h4>
        <h2>Unlocking Potential Beyond Academics</h2>
        <div className="program-cards-container">
          <div className="program-card"><img src={arts} alt="Arts Education" /><h3>Arts</h3><p>Education</p></div>
          <div className="program-card"><img src={physical_education} alt="Physical Education" /><h3>Physical</h3><p>Education</p></div>
          <div className="program-card"><img src={life_skills} alt="Life Skills" /><h3>Life Skills</h3><p>Education</p></div>
        </div>
      </section>

      <section className="program-section container" style={{ paddingTop: 0 }}>
        <h4>Scholastic Programme</h4>
        <h2>Board and Curriculum</h2>
        <div className="program-cards-container">
          <div className="program-card"><img src={earlyyears} alt="Early Years" /><h3>Early Years</h3><p>Montessori & Kindergarten</p></div>
          <div className="program-card"><img src={primaryyears} alt="Primary Years" /><h3>Primary Years</h3><p>Integrated Curriculum</p></div>
          <div className="program-card"><img src={middleyears} alt="Middle Years" /><h3>Middle Years</h3><p>Broad-Based Curriculum</p></div>
        </div>
      </section>

      <section className="join-us-section">
        <div className="container">
          <h2>Join Us Today!</h2>
          <h3>Experience the Difference at NPS Kudlu</h3>
          <p>Join us on a journey of transformative learning and growth.</p>
          <div className="join-us-gallery">
            <img src={square} alt="Gallery 1" />
            <img src={square1} alt="Gallery 2" />
            <img src={square2} alt="Gallery 3" />
            <img src={square3} alt="Gallery 4" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h4>Testimonials</h4>
          <h2>What Parents Say</h2>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">
              NPS Kudlu is among the best CBSE schools — fostering excellence through academics, innovation, and strong parent engagement.
            </p>
            <p className="testimonial-author">- Ms. Mary Christy</p>
          </div>
        </div>
      </section>

      <section className="teacher-training-section container">
        <h4>Teacher Training</h4>
        <h2>Continuous Professional Development</h2>
        <div className="training-image"><img src={sports} alt="Teacher training" /></div>
        <p>
          Teachers at NPS undergo continuous development programs that ensure quality, relevance, and innovation in education.
        </p>
      </section>

      <MapSection />
    </div>
  );
};

export default HomePage;
