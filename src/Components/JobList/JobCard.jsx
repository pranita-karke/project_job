// import React from "react";
// import "./Job.css";

// const JobCard = ({ job }) => {
//   return (
//     <div className="job-card">
//       <h2>{job["Job Title"]}</h2>
//       <h4>Role: {job["Role"]}</h4>
//       <p>
//         <strong>Description:</strong> {job["Job Description"]}
//       </p>
//       <p>
//         <strong>Experience:</strong> {job["Experience"]}
//       </p>
//       <p>
//         <strong>Qualifications:</strong> {job["Qualifications"]}
//       </p>
//       {/* <p>
//         <strong>Salary:</strong> {job["Salary Range"]}
//       </p>
//       <p>
//         <strong>Location:</strong> {job["location"]}
//       </p>
//       <p>
//         <strong>Work Type:</strong> {job["Work Type"]}
//       </p> */}
//     </div>
//   );
// };

// export default JobCard;

// import React from "react";
// import "./Job.css";

// const JobCard = ({ job }) => {
//   return (
//     <div className="job-card">
//       <h2 style={{ textAlign: "center", color: "#ff725e" }}>
//         {job["Job Title"]}
//       </h2>
//       <p>
//         {" "}
//         <strong>Role: {job["Role"]}</strong>
//       </p>
//       <p>
//         <strong>Description:</strong> {job["Job Description"]}
//       </p>
//       <p>
//         <strong>Experience:</strong> {job["Experience"]}
//       </p>
//       <p>
//         <strong>Qualifications:</strong> {job["Qualifications"]}
//       </p>
//       {/*   */}
//     </div>
//   );
// };

// export default JobCard;

// import React, { useState } from "react";
// import "./Job.css";

// const JobCard = ({ job }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="job-card"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h2 className="job-title" style={{color: "#ff725e", textAlign: "center"}}>{job["Job Title"]}</h2>

//       {isHovered ? (
//         <p className="job-description">
//           <strong>Description:</strong> {job["Job Description"]}
//         </p>
//       ) : (
//         <div className="job-details">
//           <h4>Role: {job["Role"]}</h4>
//           <p>
//             <strong>Experience:</strong> {job["Experience"]}
//           </p>
//           <p>
//             <strong>Qualifications:</strong> {job["Qualifications"]}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobCard;

// src/Components/User/UserJobCard.jsx

import React, { useState } from "react";
import "./Job.css";

const UserJobCard = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="job-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2
        className="job-title"
        style={{ color: "#ff725e", textAlign: "center" }}
      >
        {job["Job Title"]}
      </h2>

      {/* Display the Company Name */}
      <h4 style={{ textAlign: "center" }}>{job["Company Name"]}</h4>

      {isHovered ? (
        <p className="job-description">
          <strong>Description:</strong> {job["Job Description"]}
        </p>
      ) : (
        <div className="job-details">
          <h4>Role: {job["Role"]}</h4>
          <p>
            <strong>Experience:</strong> {job["Experience"]}
          </p>
          <p>
            <strong>Qualifications:</strong> {job["Qualifications"]}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserJobCard;
