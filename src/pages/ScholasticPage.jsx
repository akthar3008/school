import React from 'react';

// Import images from your assets folder
import montessoriImg from '../assets/images/montessori.jpg';
import kindergartenImg from '../assets/images/kindergarten.jpg';
import middleYearsImg from '../assets/images/middleyears.jpg';

const ScholasticPage = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>Scholastic Programme</h1>
                    <p>Home / Programme / Scholastic</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="main-content" style={{ marginBottom: '50px' }}>
                    <p>Teaching students how to learn is just as important as teaching them what to learn. We encourage our students to think for themselves, ask questions and pursue their interests through independent reading and research.</p>
                    <p>Our curriculum is specially crafted to stimulate students' interests and give them the knowledge they need to compete in the fast-changing 21st century global world. Teachers strive to make the classes as interactive as possible and use different methods to get the best out of each student.</p>
                    <h3>Board and Curriculum</h3>
                </div>

                <div className="main-content" style={{ marginBottom: '30px' }}>
                    <h2>Early Years</h2>
                    <p>Montessori and Kindergarten are offered at the early childhood level.</p>
                </div>
                
                <div className="content-grid">
                    <div className="main-content">
                        <h3>Montessori</h3>
                        <p>Our <strong>Montessori schools near you</strong> offer a scholastic program that provides a unique and effective approach to education for children aged three and up. Founded in 1907 by Dr. Maria Montessori, the Montessori method is based on self-directed activity, hands-on learning, and collaborative play.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={montessoriImg} alt="Student in a Montessori classroom" />
                        </div>
                    </div>
                </div>

                <div className="content-grid reverse">
                    <div className="main-content">
                        <h3>Kindergarten</h3>
                        <p>Children join Kindergarten at four years of age and continue for two years until Class 1. A prominent whole-development curriculum for continuous success in school-life is student-centred and theme-based. It aims to develop the social, emotional, spiritual, cognitive, and motor skills of the child.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                             <img src={kindergartenImg} alt="Student in a Kindergarten classroom" />
                        </div>
                    </div>
                </div>

                <div className="main-content" style={{ margin: '50px 0' }}>
                    <h2>Primary Years</h2>
                    <p><strong>NPS Kudlu</strong> is one of the for <strong>Best CBSE schools in Bangalore</strong> that offers an integrated, interdisciplinary curriculum for primary school students. We analytically organize learning resources. We develop children's skills, knowledge, and values, physically, cognitively, and emotionally while also incorporating creative arts.</p>
                </div>

                <div className="content-grid">
                     <div className="main-content">
                        <h2>Middle Years</h2>
                        <p><strong>NPS Kudlu</strong> is one of the <strong>Top CBSE Schools in Bangalore</strong> that offers a broad-based curriculum with an emphasis on core subjects for Middle school students. Our students are ready to study in-depth and more discreet subjects with an array of specialist teachers.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={middleYearsImg} alt="Middle school students collaborating" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholasticPage;