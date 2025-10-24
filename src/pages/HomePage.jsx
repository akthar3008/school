import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// It's a good practice to use an icon library for icons
import { FaGraduationCap, FaUsers, FaLightbulb, FaBrain, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

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

            {/* School Building and Admissions Section */}
            <section className="school-info-section container">
                <div className="school-building-card">
                    <img src={npskudlu} alt="National Public School Kudlu campus" />
                </div>
                <div className="admissions-card">
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
                <Link to="/beyond-academics" className="read-more-link">
                    Read more <FaArrowRight />
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
                        <Link to="/arts" className="know-more-link">Know more</Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={physical_education} alt="Students playing sports" />
                        </div>
                        <h3>Physical</h3>
                        <p>Education</p>
                        <Link to="/physical-education" className="know-more-link">Know more</Link>
                    </div>
                     <div className="program-card">
                        <div className="program-card-image">
                            <img src={life_skills} alt="Students collaborating" />
                        </div>
                        <h3>Life Skills</h3>
                        <p>Education</p>
                        <Link to="/life-skills" className="know-more-link">Know more</Link>
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
                        <Link to="/early-years" className="know-more-link">Know more</Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={primaryyears} alt="Primary school students reading" />
                        </div>
                        <h3>Primary Years</h3>
                        <p>An Integrated Curriculum</p>
                        <Link to="/primary-years" className="know-more-link">Know more</Link>
                    </div>
                    <div className="program-card">
                        <div className="program-card-image">
                            <img src={middleyears} alt="Middle school students in class" />
                        </div>
                        <h3>Middle Years</h3>
                        <p>A Broad-Based Curriculum</p>
                        <Link to="/middle-years" className="know-more-link">Know more</Link>
                    </div>
                </div>
            </section>

            {/* Join Us Today Section */}
            <section className="join-us-section">
                <div className="container">
                    <h2>Join Us Today!</h2>
                    <h3>Experience the Difference at NPS Kudlu</h3>
                    <p>Join us at National Public School Kudlu and embark on a journey of transformative learning. Together, let's inspire, empower, and shape the bright futures of tomorrow.</p>
                    <button className="enquire-now-btn">ENQUIRE NOW</button>
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
        </div>
    );
};

export default HomePage;

