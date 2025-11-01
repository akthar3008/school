import React from 'react';
import { Link } from 'react-router-dom';

const Grades1To8Page = () => {
  return (
    <div className="admission-page-container">
      <header className="page-header">
        <div className="container">
          <h1>Admission</h1>
          <p>Grades I to VIII</p>
        </div>
      </header>
      <div className="admission-content">
        <div className="admission-section blue-bg">
          <div className="container">
            <h3>REGISTRATION FOR ADMISSION FOR THE ACADEMIC YEAR 2026-27 open for Grade I to Grade VIII</h3>
            <p className="note">Parents seeking admission to Top CBSE School in Bangalore – National Public School Kudlu, for Grade I to Grade VIII are requested to Register ONLINE.</p>

            <p className="section-title">Please Notes:</p>
            <p>PROCESS FOR REGISTRATION</p>
            <ol>
              <li>Send the guidelines and proceed to fill the registration form.</li>
              <li>Upload Aadhar Card (If available) and Birth Certificate and last 3 years academic progress report. (Term 1 Progress Report for current year)</li>
              <li>Upload latest passport size photo.</li>
              <li>Submit the duly filled in form.</li>
              <li>Make Online payment of Rs.1000/- towards processing charges.</li>
              <li>Take a printout of the submitted form.</li>
            </ol>

            <p className="section-title">Documents to be submitted to the school along with the printout of the Registration form or as follows:</p>
            <ol>
              <li>Copy of Aadhar Card (If available)</li>
              <li>Copy of Birth Certificate</li>
              <li>Copy of last 3 years progress report. (Term 1 Progress Report for current year)</li>
              <li>Copy of receipt of processing fee paid online.</li>
            </ol>

            <p>Registration for admissions will be processed only after receiving the printout of the duly filled-in registration form and the above-mentioned documents in the school. This can be dropped in the box kept in the school premises on any working day between 9:00 AM to 4:00 PM from 28th December 2023 onwards. The office will be closed on Sunday’s and National holidays.</p>
            <p>A large number of parents are seeking admission to National Public School, Kudlu. We would like to inform every parent that we have very limited seats available for Grade 1 to Grade VIII. Parents who have submitted the completed registration forms will be called for an interview, following which admission will be granted on first come first serve basis.</p>
            
            <p className="section-title">Subjects for Admission Test</p>
            <ul>
              <li>For Grades 6 to 8 – English, Mathematics, Science, Social Science</li>
              <li>For Grades 1 to 5 – English, Mathematics, EVS</li>
            </ul>

            <p>To have an effective teaching learning process, we promote limited class strength. Considering the limited number of seats available, it is expected that those who seek admission will realise and understand the constraints the institution faces. The disappointment of not getting admission should not become a matter of unhappiness among parents.</p>
            
            <p className="section-title">Address for communication:</p>
            <p>
              National Public School, Kudlu<br />
              Singasandra,<br />
              Bengaluru – 560 068<br />
              India<br />
              Phone: +91 97312 26002<br />
              Email: info@npskudlu.com
            </p>
            <p>The registration for admission to Grade I to Grade VIII is open for the academic year 2026-2027. <Link to="/apply-online" className="apply-online-link">Apply Online Registration</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades1To8Page;
