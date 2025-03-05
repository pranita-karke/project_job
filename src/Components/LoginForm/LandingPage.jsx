// import React from "react";
// import "./JobSearchBanner.css";

// const LandingPage = ({ onLoginClick }) => {
//   return (
//     <div className="banner-container">
//       <div className="banner-content">
//         <div className="text-section">
//           <h1>LOOKING FOR A JOB?</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </p>
//           <button className="login-button" onClick={onLoginClick}>
//             Login
//           </button>
//         </div>
//         <div className="image-section">
//           <img
//             src="/advertising-banner-with-title-looking-job_82574-8393.jpg"
//             alt="Job Search Banner"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import "./LandingPage.css";
import imageSrc from "../Assets/xyz.png"; // Replace with your actual image path
import { useNavigate } from "react-router-dom";

const LandingPage = ({ onLoginClick }) => {
  return (
    <div className="landing-container">
      {/* Header is already commented out */}

      <div className="text-section">
        <h1>
          Jobs that match <span className="highlight">your passion.</span>
        </h1>
        <p>
          Unlock your career potential with personalized job matches. Discover
          opportunities that align with your skills and experience effortlessly.
        </p>
        <div className="buttons-container">
          <button className="btn primary-btn" onClick={onLoginClick}>
            Login
          </button>
          {/* <button className="btn secondary-btn" onClick={onLoginClick}>
            Login
          </button> */}
        </div>
      </div>

      <div className="image-section">
        <img src={imageSrc} alt="Job Search Illustration" />
      </div>
    </div>
  );
};

export default LandingPage;
