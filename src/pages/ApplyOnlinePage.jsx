import React, { useState } from "react";
import logo from "../assets/images/NPS-Kudlu-logo.jpg";

const ApplyOnlinePage = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { parentName, studentName, grade, phone, email } = formData;

    if (!parentName || !studentName || !grade || !phone || !email) {
      setStatus({
        type: "error",
        message: "Please fill all required fields.",
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus({
        type: "error",
        message: "Enter a valid 10-digit mobile number.",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus({
        type: "error",
        message: "Enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "success", message: "Application submitted successfully!" });
    setTimeout(() => setStatus({ type: "", message: "" }), 3000);

    setFormData({
      parentName: "",
      studentName: "",
      grade: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="apply-online-container">
      <img src={logo} alt="NPS Kudlu Logo" className="apply-logo" />
      <h1>Apply Online</h1>
      <p>
        Submit your application for admission to National Public School Kudlu.
        Please provide accurate information for smooth processing.
      </p>

      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-form-group">
          <label htmlFor="parentName">Parent Name *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Enter parent’s full name"
            required
          />
        </div>

        <div className="modal-form-group">
          <label htmlFor="studentName">Student Name *</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student’s full name"
            required
          />
        </div>

        <div className="modal-form-group">
          <label htmlFor="grade">Select Grade *</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            <option value="Montessori">Montessori</option>
            <option value="KG">Kindergarten</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
          </select>
        </div>

        <div className="modal-form-group">
          <label htmlFor="phone">Mobile Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            maxLength="10"
            required
          />
        </div>

        <div className="modal-form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="modal-form-group full-width">
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any additional information"
          ></textarea>
        </div>

        <button type="submit" className="modal-submit-btn">
          Submit Application
        </button>
      </form>

      {status.message && (
        <div className={`status-message ${status.type}`}>{status.message}</div>
      )}
    </div>
  );
};

export default ApplyOnlinePage;
