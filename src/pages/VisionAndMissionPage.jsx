import React from 'react';
import vision from '../assets/images/vision.jpg';
import mission from '../assets/images/mission.png';

const VisionAndMissionPage = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / Vision & Mission</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="content-grid">
                    <div className="main-content">
                        <h2>Our Vision</h2>
                        <p>Within an empowering child-centric environment, through numerous learning opportunities and best teaching practices, we strive to develop socially responsible, independent, knowledgeable, lifelong learners and leaders, equipped with multi-dimensional skills, values and integrity to positively impact and contribute AS GLOBAL CITIZENS.</p>
                    </div>
                    <div className="side-content">
                         <div className="content-image">
                            <img src={vision} />
                        </div>
                    </div>
                </div>
                 <div className="content-grid reverse">
                    <div className="main-content">
                        <h2>Our Mission</h2>
                        <ul>
                            <li>Continuously evolve teaching learning strategies to equip students with skills and competencies in preparation for their entry into a world beyond school.</li>
                            <li>Provide a plethora of opportunities to all students to develop the 21st century skills to transform themselves into value driven versatile well-grounded individuals.</li>
                            <li>Enable overall development through vigorous physical development programs and participation in various co-curricular activities and sports.</li>
                            <li>Continue to build constructive relationships with all our stakeholders thereby creating a positive school climate which helps to extend a caring school community.</li>
                        </ul>
                    </div>
                     <div className="side-content">
                        <div className="content-image">
                            <img src={mission} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMissionPage;
