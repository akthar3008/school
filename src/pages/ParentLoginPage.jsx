import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ParentLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({ type: "error", message: "Invalid email format." });
      return;
    }

    setStatus({ type: "success", message: "Login successful!" });
    setTimeout(() => setStatus({ type: "", message: "" }), 2500);
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2 className="login-title">
          <FaUser /> Parent Login
        </h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-group">
            <FaEnvelope className="login-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-form-group">
            <FaLock className="login-icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-form-actions">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </div>
        </form>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <div className="login-footer-links">
          <p>
            Don’t have an account?{" "}
            <Link to="/apply-online" className="signup-link">
              Apply Online
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentLoginPage;
