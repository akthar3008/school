import React from 'react';

// Step 1: Import your local images
import classroomImg from '../assets/images/1.jpg';
import computerLabImg from '../assets/images/2.jpg';
import scienceLabImg from '../assets/images/5.jpg';
import libraryImg from '../assets/images/3.jpg';
import sportsImg from '../assets/images/4.jpg';


const FacilitiesPage = () => {
    const facilities = [
        {
            title: 'Class Room',
            description: 'Classrooms at NPS Kudlu – The Best CBSE School in Bangalore are well-resourced and spacious. They are designed in such a way that each student gets the teacher’s maximum individualized attention. Students are encouraged to decorate their classrooms and display their creative work on the boards.',
            image: classroomImg
        },
        {
            title: 'Computer Lab',
            description: 'The computer laboratory at National Public School Kudlu has over a 100 computers with a dedicated broadband internet connection for students. Student usage of media and technology are monitored and supervised by teachers.',
            image: computerLabImg
        },
        {
            title: 'The Science Laboratory',
            description: 'The science laboratory at NPS Kudlu — one of the Top CBSE Schools in Bangalore provides a space for experiential and hands on learning for students. There are separate workstations for Physics, Chemistry and Biology.',
            image: scienceLabImg
        },
        {
            title: 'The Library',
            description: 'The library is the main resource centre for students and can accommodate over 150 students at a time. Students have access to a vast collection of fiction and non-fiction books, reference books, academic journals, periodicals, magazines, newspapers and textbooks.',
            image: libraryImg
        },
        {
            title: 'Sports',
            description: 'Sports facilities at NPS Kudlu include basketball, volleyball, badminton, gymnastics, cricket, football, throw ball, aerobics, taekwondo and yoga.',
            image: sportsImg
        }
    ];

    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / Facilities</p>
                </div>
            </header>
            <div className="page-content container">
                {facilities.map((facility, index) => (
                    <div className={`content-grid ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
                        <div className="main-content">
                            <h2>{facility.title}</h2>
                            <p>{facility.description}</p>
                        </div>
                        <div className="side-content">
                            <div className="content-image">
                                <img src={facility.image} alt={facility.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacilitiesPage;