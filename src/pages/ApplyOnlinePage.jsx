import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/images/NPS-Kudlu-logo.jpg'; // Make sure this path is correct

const ApplyOnlinePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- Logic to control the modal ---
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., send data to backend)
        alert('Form submitted (placeholder)');
        closeModal();
    };

    return (
        <div className="apply-online-container">
            {/* --- This is the main page content (Image 1) --- */}
            <img src={logo} alt="National Public School, Kudlu" className="apply-logo" />
            <p className="apply-greeting">Greetings from National Public School, Kudlu.</p>
            <p className="apply-text">We request to kindly click on the 'Enquire Now' button to fill in the form and submit.</p>
            <p className="apply-text">Post the enquiry form is submitted, the Admission Team will connect with you for further process.</p>
            
            <button className="enquire-now-btn-page" onClick={openModal}>
                ENQUIRE NOW
            </button>

            {/* --- This is the Modal (Pop-up) (Image 2) --- */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        <div className="modal-header">
                            <h2>Fill the Enquiry Form</h2>
                            <button className="modal-close-btn" onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>
                        
                        <form className="modal-form" onSubmit={handleFormSubmit}>
                            <div className="modal-form-group full-width">
                                <label htmlFor="admissionFor">Admission for 2026 - 2027 <span>*</span></label>
                                <select id="admissionFor" name="admissionFor" required>
                                    <option value="">Please select the class from the dropdown menu</option>
                                    <option value="kg">Kindergarten</option>
                                    <option value="montessori">Montessori</option>
                                    <option value="grade1">Grade 1</option>
                                    <option value="grade2">Grade 2</option>
                                    <option value="grade3">Grade 3</option>
                                    <option value="grade4">Grade 4</option>
                                    <option value="grade5">Grade 5</option>
                                    <option value="grade6">Grade 6</option>
                                    <option value="grade7">Grade 7</option>
                                    <option value="grade8">Grade 8</option>
                                </select>
                            </div>

                            <h3>Student Details</h3>
                            
                            <div className="modal-form-group">
                                <label htmlFor="studentName">Name of the Student (in Capital Letters) <span>*</span></label>
                                <input type="text" id="studentName" name="studentName" placeholder="Student Name" required />
                            </div>
                            
                            <div className="modal-form-group">
                                <label htmlFor="dob">Date of birth <span>*</span></label>
                                <input type="text" id="dob" name="dob" placeholder="Date of Birth" required onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} />
                            </div>

                            <h3>Parent's Details (Father or Mother)</h3>
                            
                            <div className="modal-form-group">
                                <label htmlFor="parentName">Name <span>*</span></label>
                                <input type="text" id="parentName" name="parentName" placeholder="Name" required />
                            </div>
                            
                            <div className="modal-form-group">
                                <label htmlFor="mobile">Mobile <span>*</span></label>
                                <input type="tel" id="mobile" name="mobile" placeholder="Mobile" required />
                            </div>
                            
                            <div className="modal-form-group">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="modal-form-group full-width">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Type your message here..."></textarea>
                            </div>

                            <div className="modal-form-actions">
                                <button type="submit" className="modal-submit-btn">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplyOnlinePage;
