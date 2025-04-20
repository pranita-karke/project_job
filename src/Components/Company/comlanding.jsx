import React from "react";
// import "./CompanyDashboard.css"; // optional

const CompanyDashboard = () => {
  const companyName = localStorage.getItem("companyName");
  const companyDescription = localStorage.getItem("companyDescription");

  return (
    <div>
      <nav className="navbar">
        <h1 style={{ color: "#ff725e", fontSize: "40px" }}>
          {companyName} Dashboard
        </h1>
        <div className="nav-buttons">
          <button
            className="jobs-btn"
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
        <h2>Welcome, {companyName}!</h2>
        <p>{companyDescription}</p>
        <p>Here you can manage your job postings, view applicants, and more.</p>
      </div>
    </div>
  );
};

export default CompanyDashboard;
