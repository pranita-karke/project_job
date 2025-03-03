import React from "react";
import "./Job.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job["Job Title"]}</h2>
      <h4>Role: {job["Role"]}</h4>
      <p>
        <strong>Description:</strong> {job["Job Description"]}
      </p>
      <p>
        <strong>Experience:</strong> {job["Experience"]}
      </p>
      <p>
        <strong>Qualifications:</strong> {job["Qualifications"]}
      </p>
      {/* <p>
        <strong>Salary:</strong> {job["Salary Range"]}
      </p>
      <p>
        <strong>Location:</strong> {job["location"]}
      </p>
      <p>
        <strong>Work Type:</strong> {job["Work Type"]}
      </p> */}
    </div>
  );
};

export default JobCard;
