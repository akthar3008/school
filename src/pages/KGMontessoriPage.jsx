import React from 'react';
import { Link } from 'react-router-dom';

const KGMontessoriPage = () => {
  return (
    <div className="admission-page-container">
      <header className="page-header">
        <div className="container">
          <h1>Admission</h1>
          <p>KG I, KG II & Montessori</p>
        </div>
      </header>
      <div className="admission-content">
        <div className="admission-section blue-bg">
          <div className="container">
            <h3>REGISTRATION FOR ADMISSION FOR THE ACADEMIC YEAR 2026-27, OPEN FOR KG I, KG II, AND MONTESSORI 1</h3>
            <p className="note">Parents seeking admission to National Public School, Kudlu, the best CBSE School in Bangalore – National Public School, Kudlu, for KG I, KG II and Montessori 1 are requested to Register ONLINE.</p>

            <p className="section-title">Please notes:</p>
            <ul>
              <li>For KG I registration the child should complete 4 years as on 1st June 2025</li>
              <li>For KG II registration the child should complete 5 years as on 1st June 2025</li>
              <li>For Montessori 1 registration the child should complete 3 years as on 1st June 2025</li>
              <li>For Grade I registration the child should complete 6 years as on 1st June 2025</li>
            </ul>

            <p className="section-title">PROCESS FOR REGISTRATION</p>
            <ol>
              <li>Send the guidelines and proceed to fill the registration form</li>
              <li>Upload Aadhar Card (If available) and Birth Certificate (Mandatory)</li>
              <li>Upload latest passport size photo (Mandatory)</li>
              <li>Submit the duly filled in form. (Incomplete forms will not be processed)</li>
              <li>Make Online payment of Rs.1000/- towards processing charges.</li>
              <li>Take a printout of the submitted form.</li>
            </ol>

            <p className="section-title">Documents to be submitted to the school along with the printout of the Registration form or as follows:</p>
            <ol>
              <li>Copy of Birth Certificate</li>
              <li>Copy of Aadhar Card (If available)</li>
              <li>Latest photograph of the child</li>
              <li>Copy of receipt of processing fee paid online</li>
            </ol>

            <p>Registration for admissions will be processed only after receiving the printout of the duly filled-in registration form and the above-mentioned documents in the school. This can be dropped in the box kept in the school premises on any working day between 9:00 AM to 4:00 PM from 28th December 2023 onwards. The office will be closed on Sunday’s and National holidays.</p>
            <p>A large number of parents are seeking admission to National Public School, Kudlu. We would like to inform every parent that we have very limited seats available for the Montessori and Kindergarten classes. Parents who have submitted the completed registration forms will be called for an interview, following which admission will be granted on first come first serve basis.</p>

            <p className="section-title">Address for communication:</p>
            <p>
              National Public School, Kudlu<br />
              Singasandra,<br />
              Bengaluru – 560 068<br />
              India<br />
              Phone: +91 97312 26002<br />
              Email: info@npskudlu.com
            </p>
            <p>The registration for admission to KG I, KG II, and Montessori 1, is now open for the academic year 2026-2027. <Link to="/apply-online" className="apply-online-link">Apply Online Registration</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KGMontessoriPage;
