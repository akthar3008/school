import React from 'react';
import npskudlu from '../assets/images/npskudlu.jpg';
import philisophy1 from '../assets/images/philisophy1.jpg';

const OverviewPage = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / Overview</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="content-grid">
                    <div className="main-content">
                        <h2>We teach Academic excellence, good values, and discipline for our students</h2>
                        <p>National Public School was established in 1959 with Dr. K. P. Gopalakrishna serving as its Chairman. Highly skilled personal and modern teaching technology will be used by the co-educational English school when it opens its doors this year.</p>
                        <p>National Public School Kudlu in Bangalore, is committed to imparting high-quality, holistic education by giving students the opportunities to develop their creative and social skills through a wide variety of programs in a safe, innovative and healthy environment. At NPS, we hope to inspire students a love of learning through the development of the intellectual, emotional, social, physical and creative potentials.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={npskudlu} />
                        </div>
                    </div>
                </div>
                 <div className="content-grid reverse">
                    <div className="main-content">
                        <h2>Our Programmes</h2>
                        <p>Teaching students how to learn is just as important as teaching them what to learn. We encourage our students to think for themselves, ask questions and pursue their interests through independent reading and research.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={philisophy1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
