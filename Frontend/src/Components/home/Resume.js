import React from 'react';
import { useNavigate } from "react-router-dom";
import './Resume.css'; // CSS for styling

const Resume = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/homepage"); // The path for the Resume page
  };
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1>Create Your Professional Resume</h1>
        <ul>
          <li>1. Select a template from our library of professional designs.</li>
          <li>2. Build your resume with our industry-specific bullet points.</li>
          <li>3. Download your resume, print it out, and get it ready to send!</li>
        </ul>
      </div>

      <div className="resume-image-container">
        <img 
          src="Resume.png" 
          alt="Resume preview" 
          className="resume-image" 
        />
        <button className="resume-button" onClick={handleNavigate}>
      Create My Resume
    </button>
      </div>
    </div>
  );
};

export default Resume;
