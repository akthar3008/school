import React from 'react';
import { FaBullseye, FaRocket, FaCheckCircle } from 'react-icons/fa';

const AboutUsPage = () => {
    return (
        <div className="page-container">
            {/* Page Header */}
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / About Us</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="page-content container">
                <section className="about-overview">
                    <div className="about-image">
                        <img src="https://placehold.co/800x600/ddd/1d2b4f?text=Our+Students" alt="Happy students at NPS Kudlu" />
                    </div>
                    <div className="about-text">
                        <h2>National Public School, Kudlu</h2>
                        <p>
                            National Public School, Kudlu, a co-educational school, is the latest institution in the NPS family of schools, known for its academic excellence for over 60 years. Our school is founded on the core values of the NPS culture and is dedicated to nurturing responsible and well-rounded individuals.
                        </p>
                        <p>
                            We provide a stimulating and safe environment that fosters a love for learning and encourages students to explore their full potential. Our curriculum is designed to be comprehensive and challenging, preparing students for the academic rigors of higher education and the complexities of the modern world.
                        </p>
                    </div>
                </section>

                <section className="vision-mission-section">
                    <div className="card vision-card">
                        <FaRocket className="card-icon" />
                        <h3>Our Vision</h3>
                        <p>
                            To be a vibrant institution that nurtures students into confident, compassionate, and knowledgeable global citizens, equipped with the skills to innovate and lead.
                        </p>
                    </div>
                    <div className="card mission-card">
                        <FaBullseye className="card-icon" />
                        <h3>Our Mission</h3>
                        <p>
                            To provide a dynamic and supportive learning environment that encourages academic excellence, critical thinking, creativity, and a strong sense of social responsibility through a rich and diverse curriculum.
                        </p>
                    </div>
                </section>

                <section className="core-values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Integrity</span>
                        </div>
                        <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Excellence</span>
                        </div>
                        <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Respect</span>
                        </div>
                        <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Collaboration</span>
                        </div>
                         <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Innovation</span>
                        </div>
                         <div className="value-item">
                            <FaCheckCircle className="value-icon" />
                            <span>Responsibility</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUsPage;
