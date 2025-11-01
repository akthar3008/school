import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const ParentLoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [status, setStatus] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: 'Logging in...', type: 'info' });

        // ---
        // TODO: Add your authentication logic here
        // For now, this is a placeholder
        // ---
        setTimeout(() => {
            if (formData.username === 'parent' && formData.password === 'password123') {
                setStatus({ message: 'Login Successful! Redirecting...', type: 'success' });
                // You would redirect here, e.g.:
                // window.location.href = '/parent-dashboard'; 
            } else {
                setStatus({ message: 'Invalid username or password.', type: 'error' });
            }
        }, 1000);
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2 className="login-title">Parent Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <FaUser className="login-icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username / Parent ID"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <FaLock className="login-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="login-form-actions">
                        <a href="#!" className="forgot-password">Forgot Password?</a>
                        <button type="submit" className="login-submit-btn">Login</button>
                    </div>
                </form>
                {status.message && (
                    <p className={`status-message ${status.type}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ParentLoginPage;

