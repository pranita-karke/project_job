// import React, { useEffect, useState } from "react";
// import JobCard from "./JobCard";

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search input

//   useEffect(() => {
//     fetch("/jobs.json")
//       .then((response) => response.json())
//       .then((data) => setJobs(data))
//       .catch((error) => console.error("Error loading job data:", error));
//   }, []);

//   // Filter jobs based on the search query
//   const filteredJobs = jobs.filter((job) => {
//     const lowercasedQuery = searchQuery.toLowerCase();
//     return (
//       job["Role"].toLowerCase().includes(lowercasedQuery) ||
//       job["Qualifications"].toLowerCase().includes(lowercasedQuery)
//     );
//   });

//   return (
//     <div>
//       {/* Search Input */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Role or Qualification"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} // Update search query
//         />
//       </div>

//       {/* Display Filtered Jobs */}
//       <div className="job-list">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
//         ) : (
//           <p>No jobs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import "./Job.css"; // Ensure CSS is applied

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 style={{ color: "#ff725e", fontSize: "40px" }}>Job Portal</h1>
      <div className="nav-buttons">
        {/* Job Recommendation Button */}
        <button
          className="cv-btn"
          onClick={() => {
            window.location.href = "http://localhost:5000"; // This will navigate to Streamlit directly in the same tab
          }}
        >
          Upload your CV
        </button>
        {/* Job Recommendation Button */}
        <button
          className="recommendation-btn"
          onClick={() => {
            window.location.href = "http://localhost:8501"; // This will navigate to Streamlit directly in the same tab
          }}
        >
          Get Job Recommendations
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            window.location.href = "http://localhost:3000"; // This will navigate to Streamlit directly in the same tab
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading job data:", error));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      // job["Role"].toLowerCase().includes(lowercasedQuery) ||
      job["Qualifications"].toLowerCase().includes(lowercasedQuery)
    );
  });

  return (
    <div>
      {/* Include Navbar at the top */}
      <Navbar />

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Qualification"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Filtered Jobs */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
