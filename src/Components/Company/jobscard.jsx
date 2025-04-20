import React, { useState } from "react";
import "../JobList/Job.css";

const JobCard = ({ job }) => {
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

export default JobCard;
