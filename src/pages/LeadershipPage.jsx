import React, { useState } from 'react';
import msgschairman300x300 from '../assets/images/msgschairman300x300.jpg';
import msgsdean300x300 from '../assets/images/msgsdean300x300.jpg';
import msgsdirector300x300 from '../assets/images/msgsdirector300x300.jpg';

const LeadershipPage = () => {
    const [activeTab, setActiveTab] = useState('chairman'); // 'chairman', 'dean', or 'director'

    const renderContent = () => {
        switch (activeTab) {
            case 'chairman':
                return (
                    <div className="chairman-message-card">
                        <h3>A Message from Our Chairman</h3>
                        <div className="chairman-content">
                            <div className="chairman-photo">
                                <img src={msgschairman300x300} alt="Dr. K. P. Gopalakrishna, Chairman" />
                            </div>
                            <div className="chairman-text">
                                <p><strong>Dr. K. P. Gopalakrishna</strong></p>
                                <p className="chairman-title">Chairman, NPS Group of Institutions</p>
                                <p>Few things have greater importance to parents than the education of their children. Every parent looks for academic excellence, good values, and discipline for their children. Choosing the right school for them is therefore a crucial decision.</p>
                                <p>All the dynamic institutions in the world today look forward to introducing and offering a creative approach in the educational curriculum. Teachers play a major role in implementing and supporting the students to gain competence in their efforts.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'dean':
                return (
                    <div className="chairman-message-card">
                        <h3>A Message from Our Chairman</h3>
                        <div className="chairman-content">
                            <div className="chairman-photo">
                                <img src={msgsdean300x300} alt="Dr. K. P. Gopalakrishna, Chairman" />
                            </div>
                            <div className="chairman-text">
                                <p><strong>Dr. Santhamma Gopalkrishna</strong></p>
                                <p className="chairman-title">Dean, NPS Group of Institutions, NAFL and TISB</p>
                                <p>Education has a multifaceted function. The transformation from childhood to adulthood is an important one. Education has a major role to play in this process.
                                    In Swami Vivekananda’s words, “Education is not the amount of information that is put in to your brain and runs riot there, undigested all your life. We want that education, by which character is formed, strength of mind is increased, intellect is expanded and by which we can stand on one’s own feet.”
                                    All the dynamic institutions in the world today look forward to introducing and affecting a creative approach in the educational curriculum. Teachers play a major role in implementing and supporting the students to gain competence in their efforts.
                                    In addition to acquisition of knowledge, education should aim at physical, mental and spiritual development. There should be opportunity for character formation and personality development.
                                    The training one gets from schools and colleges should include academic excellence – professional, scientific and technological – attainment of life skills and vocational efficiency. The training should also help to manifest innate potentialities making use of opportunities and staying alert.</p>
                                <p>Progress of a country depends on its education system. In this era of globalization it is necessary to understand economic, social and political aspects of all the countries. Practicing brotherhood, love and compassion between different communities, races and nations is of utmost importance. The emphasis on developing patriotism and pride in one’s culture is indispensable.
                                    Daniel Webster put it rightly “Knowledge does not comprise all which is contained in the large term of education. The feelings are to be disciplined, the passions are to be restrained; true and worthy motives are to be inspired, a profound religious feeling is to be instilled and pure morality inculcated under all circumstances. All this is comprised in education.”
                                    Education in its true sense leads to health and fitness, happy relationships, meaningful work and personal fulfilment.
                                    We at NPS try to promote an atmosphere where education is a blend of progressive ideas from the best in the Indian setting and culture. Students are given personal care and support so that they take the right place in the Global society.
                                    Best wishes,</p>
                            </div>
                        </div>
                    </div>
                );
            case 'director':
                 return (
                    <div className="chairman-message-card">
                        <h3>A Message from Our Chairman</h3>
                        <div className="chairman-content">
                            <div className="chairman-photo">
                                <img src={msgsdirector300x300} alt="Dr. K. P. Gopalakrishna, Chairman" />
                            </div>
                            <div className="chairman-text">
                                <p><strong>Dr. Bindu Hari</strong></p>
                                <p className="chairman-title">Director, NPS Group of Institutions, NAFL and TISB</p>
                                <p>Every student comes to us with special goals, dreams and expectations of what their future might hold.We envision a school environment to help students achieve their potential, offer guidance, hone their leadership skills and foster in students the confidence to explore a new range of interests, ultimately contributing positively to the societies they live in. It is our belief that every student in our school has the ability to succeed not just academically but as individuals in their own unique ways.
                                    An enthusiastic and professional body of faculty ensures that excellence is promoted in all aspects of school life along with special emphasis on life skills and lifelong learning, in order to prepare students for life beyond school.</p>
                                <p>We are proud of the strength of the partnership between parents, staff and students which underpin the degree of progress our students attain.
                                    Through a combination of dedication, understanding and appreciation, we encourage our students to aim high and achieve their goals, in keeping with our motto – Reach Out, Reach High and Reach Beyond.
                                    Best wishes,</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page-container">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Home / Leadership</p>
                </div>
            </header>
            <div className="page-content container">
                <div className="leadership-tabs">
                    <button
                        className={`tab-button ${activeTab === 'chairman' ? 'active' : ''}`}
                        onClick={() => setActiveTab('chairman')}
                    >
                        Chairman Message
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'dean' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dean')}
                    >
                        Dean Message
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'director' ? 'active' : ''}`}
                        onClick={() => setActiveTab('director')}
                    >
                        Director Message
                    </button>
                </div>
                <div className="leadership-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default LeadershipPage;