import React, { useEffect, useState } from "react";
import "../JobList/Job.css"; // Optional styling reuse

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/get-applications")
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error loading applications:", error));
  }, []);

  return (
    <div className="application-list-container">
      <h2 style={{ color: "#ff725e", textAlign: "center" }}>
        Submitted Applications
      </h2>
      {applications.length > 0 ? (
        <div className="application-list">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <h3>Name: {app.name}</h3>
              <p>Role: {app.role}</p>

              {/* View CV */}
              <a
                href={`http://localhost:5001/uploads/${app.cv_path
                  .split("/")
                  .pop()}`} // Correct path
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No applications submitted yet.</p>
      )}
    </div>
  );
};

export default ApplicationsList;
