import React, { useState, useEffect } from "react";

const CompanyDashboard = () => {
  const companyName = localStorage.getItem("companyName");
  const [companyDescription, setCompanyDescription] = useState("");
  const [setApplications] = useState([]);

  useEffect(() => {
    if (companyName) {
      fetch(
        `http://localhost:5001/get-company-description?companyName=${companyName}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCompanyDescription(data.companyDescription);
        })
        .catch((err) => console.error("Failed to fetch company data:", err));

      fetch(
        `http://localhost:5001/get-applications?companyName=${encodeURIComponent(
          companyName
        )}`
      )
        .then((res) => res.json())
        .then((data) => setApplications(data))
        .catch((err) => console.error("Failed to fetch applications:", err));
    }
  }, [companyName]);

  const jobsButtonStyle = {
    backgroundColor: "#ff725e",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out",
    marginRight: "10px",
  };

  return (
    <div>
      <nav className="navbar">
        <h1 style={{ color: "#ff725e", fontSize: "40px", textAlign: "center" }}>
          {companyName} Dashboard
        </h1>
        <div className="nav-buttons">
          <button
            style={jobsButtonStyle}
            onClick={() => {
              window.location.href = "/company-jobs";
            }}
          >
            Jobs
          </button>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "http://localhost:3000";
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <h2 style={{ textAlign: "center" }}>Welcome, {companyName}!</h2>
        <p style={{ textAlign: "center" }}>{companyDescription}</p>
      </div>
    </div>
  );
};

export default CompanyDashboard;
