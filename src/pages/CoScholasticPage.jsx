import React from 'react';

// Import images from your assets folder
import artsImg from '../assets/images/arts.jpg';
import physicalEducationImg from '../assets/images/physical_education.jpg';
import lifeSkillsImg from '../assets/images/life_skills.jpg';

const CoScholasticPage = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>Co-Scholastic Programme</h1>
                    <p>Home / Programme / Co-Scholastic</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="main-content" style={{ marginBottom: '50px' }}>
                    <p>Welcome to <strong>NPS Kudlu</strong>, the home of exceptional co-scholastic programs that will unleash your child's full potential! We understand that a child's education should go beyond just academics. That's why we have carefully crafted our co-scholastic programs to offer a wide range of exciting and stimulating activities.</p>
                </div>

                <div className="content-grid">
                    <div className="main-content">
                        <h2>Arts</h2>
                        <p>Arts education refers to education in the disciplines of music, dance, theatre, and visual arts. The Arts are a key component to improving learning throughout all academic areas. Studies show that the Arts develop neural systems that benefit fine motor skills, creativity, and improved emotional balance.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={artsImg} alt="Students performing in a play" />
                        </div>
                    </div>
                </div>

                <div className="content-grid reverse">
                    <div className="main-content">
                        <h2>Physical Education</h2>
                        <p>Our exceptional co-scholastic programs include a focus on physical education, which has been shown to benefit students' physical health, cognitive abilities, and social skills. As one of the <strong>best CBSE schools in Bangalore</strong>, we offer a wide range of sports facilities and experienced coaches.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={physicalEducationImg} alt="Students playing sports outdoors" />
                        </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="main-content">
                        <h2>Life Skills Education</h2>
                        <p>At NPS Kudlu, we believe that education goes beyond the classroom, which is why we offer exceptional co-scholastic programs that prioritize life skills education. Our life skills education program focuses on areas such as communication, critical thinking, problem-solving, decision-making, and collaboration.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={lifeSkillsImg} alt="Students working on a project with a teacher" />
                        </div>
                    </div>
                </div>

                 <div className="main-content" style={{ marginTop: '50px' }}>
                    <h2>Newspaper in Education (NIE)</h2>
                    <p>As one of the <strong>top CBSE schools in Bangalore, National Public School Kudlu</strong> is committed to providing a well-rounded education that goes beyond traditional classroom learning. Our exceptional co-scholastic programs include newspapers in education, which offers students the opportunity to develop critical reading skills.</p>
                 </div>
            </div>
        </div>
    );
};

export default CoScholasticPage;