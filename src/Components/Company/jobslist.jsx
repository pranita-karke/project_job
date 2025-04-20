// import React, { useEffect, useState } from "react";
// import JobCard from "./jobscard";
// import "../JobList/Job.css"; // Ensure CSS is applied

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 style={{ color: "#ff725e", fontSize: "40px" }}>Job Portal</h1>
//       <div className="nav-buttons">

//         <button
//           className="logout-btn"
//           onClick={() => {
//             window.location.href = "http://localhost:3000"; // This will navigate to Streamlit directly in the same tab
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch("/jobs.json")
//       .then((response) => response.json())
//       .then((data) => setJobs(data))
//       .catch((error) => console.error("Error loading job data:", error));
//   }, []);

//   const filteredJobs = jobs.filter((job) => {
//     const lowercasedQuery = searchQuery.toLowerCase();
//     return (
//       // job["Role"].toLowerCase().includes(lowercasedQuery) ||
//       job["Qualifications"].toLowerCase().includes(lowercasedQuery)
//     );
//   });

//   return (
//     <div>
//       {/* Include Navbar at the top */}
//       <Navbar />

//       {/* Search Input */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Qualification"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
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
// JobList.js (Updated)
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "./jobscard";
import "../JobList/Job.css"; // Ensure styling

const Navbar = ({ onAddClick }) => {
  return (
    <nav className="navbar">
      <h1 style={{ color: "#ff725e", fontSize: "40px" }}>Job Portal</h1>
      <div className="nav-buttons">
        <button className="add-btn" onClick={onAddClick}>
          Add Job
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            window.location.href = "http://localhost:3000"; // Redirect to home
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

const JobList = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/get-jobs") // Ensure Flask server is running on port 5001
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading job data:", error));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return job["Qualifications"]?.toLowerCase().includes(lowercasedQuery);
  });

  return (
    <div>
      {/* Navbar with Add Job button */}
      <Navbar onAddClick={() => navigate("/add-job")} />

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Qualification"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Job List */}
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
