import React from 'react';
import classroomImg from '../assets/images/1.jpg';

const AverageSchoolDayPage = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / Average School Day Schedule</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="content-grid">
                    <div className="main-content">
                        <h2>School Day Schedule</h2>
                        <p>The early years follows flexible schedules starting the day with assemblies, physical exercise, circle time or group-chat. The students of early years have a mid-morning break followed with outdoor play. The school day is scheduled to ensure the child’s holistic learning needs are met at all times.</p>
                        <p>The school timings for students in the early learning programme:<br/>
                        Kindergarten – 8.15 a.m. to 12.00 noon<br/>
                        Montessori – 9 a.m. to 12 noon</p>
                        <p>For students of Classes 1 and above, the school begins at 8.15 am and ends at 2.50 pm with a mid-morning snack break and afternoon lunch break. The breaks also give students time to interact and play with their peers.</p>
                    </div>
                    <div className="side-content">
                        <div className="content-image">
                            <img src={classroomImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AverageSchoolDayPage;
