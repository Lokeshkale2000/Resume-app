import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
 
  const [showResume, setShowResume] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
 

 

  const handleNavigate = (path) => {
    navigate(path);
  };
  const navigate = useNavigate();




  const toggleResumeCard = () => {
    setShowResume((prevState) => !prevState);
  };

  const toggleCvCard = () => {
    setShowCv((prevState) => !prevState);
  };

  const toggleCoverLetterCard = () => {
    setShowLetter((prevState) => !prevState);
  };

  const toggleBlogCard = () => {
    setShowBlog((prevState) => !prevState);
  };

  const toggleAboutCard = () => {
    setShowAbout((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left"></div>
        <div className="nav-links">
          {/* Tools Dropdown */}
       
          {/* Resume Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleResumeCard}>
              Resume <span className="dropdown-icon">▼</span>
            </span>
            {showResume && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="Resume Builder" />
                  <div>
                    <strong onClick={() => handleNavigate("/homepage")} >Resume Builder</strong>
                    <p>Create a resume in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
               
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Maker" />
                  <div>
                    <strong onClick={() => handleNavigate("/homepage")}>CV Maker</strong>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
               
              </div>
            )}
          </div>

          {/* CV Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleCvCard}>
              CV <span className="dropdown-icon">▼</span>
            </span>
            {showCv && (
              <div className="tools-card">
              <div className="tool-item" onClick={() => handleNavigate("/homepage")}>
                <img src="coverletter.png" alt="CV Builder" />
                <div>
                  <strong>CV Builder</strong>
                  <p>Create a CV in 5 minutes. Get the job you want.</p>
                </div>
              </div>
              <hr />
              <div className="tool-item" onClick={() => handleNavigate("/cv-examples")}>
                <img src="download (1).png" alt="CV Examples" />
                <div>
                  <strong>CV Examples</strong>
                  <p>See perfect CV samples that get jobs.</p>
                </div>
              </div>
              <hr />
              <div className="tool-item" onClick={() => handleNavigate("/cv-help")}>
                <img src="download (1).png" alt="CV Help" />
                <div>
                  <strong>CV Help</strong>
                  <p>Improve your CV with help from expert guides.</p>
                </div>
              </div>
            </div>
            
            )}
          </div>

    
          <div className="nav-item">
      <span className="nav-link" onClick={toggleCoverLetterCard}>
        Cover Letter <span className="dropdown-icon">▼</span>
      </span>
      {showLetter && (
        <div className="tools-card">
          <div className="tool-item" onClick={() => handleNavigate("/upload")}>
            <img src="coverletter.png" alt="Cover Letter Builder" />
            <div>
              <strong>Cover Letter Builder</strong>
              <p>Create a cover letter in 5 minutes. Get the job you want.</p>
            </div>
          </div>
          <hr />
          <div className="tool-item" onClick={() => handleNavigate("/tempmanager")}>
            <img src="download (1).png" alt="Cover Letter Templates" />
            <div>
              <strong>Cover Letter Templates</strong>
              <p>Find the perfect cover letter template.</p>
            </div>
          </div>
          <hr />
          <div className="tool-item" onClick={() => handleNavigate("/tempmanager")}>
            <img src="download (1).png" alt="Cover Letter Examples" />
            <div>
              <strong>Cover Letter Examples</strong>
              <p>See perfect cover letter samples that get jobs.</p>
            </div>
          </div>

          <button type="button" onClick={() => handleNavigate("/create-cover-letter")}>
            Create Your Cover Letter Now
          </button>
        </div>
      )}
    </div>
          {/* Blog Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleBlogCard}>
              Pricing  <span className="dropdown-icon">▼</span>
            </span>
            {showBlog && (
             <div className="tools-card">
             <div className="tool-item" onClick={() => handleNavigate("/pricing")}>
               <img src="coverletter.png" alt="Latest Blog" />
               <div>
                 <strong>Pricing offer</strong>
                 <p>Check out our latest blog posts on job hunting.</p>
               </div>
             </div>
             <hr />
             <div className="tool-item" onClick={() => handleNavigate("/payment")}>
               <img src="download (1).png" alt="Blog Categories" />
               <div>
                 <strong>Payment</strong>
                 <p>Explore various categories for your job search.</p>
               </div>
                </div>
             
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleAboutCard}>
            Setting <span className="dropdown-icon">▼</span>
            </span>
            {showAbout && (
              <div className="tools-card">
             
                <div className="tool-item">
                  <img src="download (1).png" alt="Contact" />
                  <div>
                    <strong onClick={() => handleNavigate("/sidenavbr")}>Account Setting</strong>
                    <p>Get in touch with us for any inquiries.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link to="/login" className="account-button">
          My Account
        </Link>
      </nav>
    </header>
  );
};

export default Header;
