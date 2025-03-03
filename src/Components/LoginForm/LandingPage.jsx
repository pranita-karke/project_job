import React from "react";
import "./JobSearchBanner.css";

const LandingPage = ({ onLoginClick }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="text-section">
          <h1>LOOKING FOR A JOB?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="login-button" onClick={onLoginClick}>
            Login
          </button>
        </div>
        <div className="image-section">
          <img
            src="/advertising-banner-with-title-looking-job_82574-8393.jpg"
            alt="Job Search Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
