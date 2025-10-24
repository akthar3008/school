import React, { useState } from 'react';
import axios from 'axios';
// import './ContactPage.css'; // <--- DELETE THIS LINE

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: 'Submitting...', type: 'info' });
        try {
            const API_URL = 'http://localhost:5001/api/inquiries';
            const response = await axios.post(API_URL, formData);
            
            setStatus({ message: response.data.message, type: 'success' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({ message: error.response?.data?.message || 'An error occurred.', type: 'error' });
        }
    };

    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>Have a question or want to learn more? Send us a message!</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Submit Inquiry</button>
            </form>
            {status.message && 
              <p className={`status-message ${status.type}`}>
                {status.message}
              </p>
            }
        </div>
    );
};

export default ContactPage;
