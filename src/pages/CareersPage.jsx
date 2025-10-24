import React from 'react';

const CareersPage = () => {
  return (
    <div className="careers-page-container">
      <header className="page-header">
        <div className="container">
          <h1>Resource</h1>
          <p>Careers</p>
        </div>
      </header>
      <div className="careers-content container">
        <p className="intro-text">
          We seek educators that are open minded, passionate about education and children, and committed to lifelong learning.
        </p>
        <p className="email-text">
          Interested candidates should email their resume at <a href="mailto:hr@npskudlu.com">hr@npskudlu.com</a> or mail it to our address provided below:
        </p>
        <div className="address-block">
          <p><strong>National Public School,</strong></p>
          <p>148, Singasandra, Kudlu,</p>
          <p>Bangalore – 560 068</p>
          <p>Karnataka.</p>
          <p><strong>Phone:</strong> +91 9731226002</p>
          <p><strong>Email:</strong> <a href="mailto:hr@npskudlu.com">hr@npskudlu.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;