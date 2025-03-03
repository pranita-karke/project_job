import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading job data:", error));
  }, []);

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      job["Role"].toLowerCase().includes(lowercasedQuery) ||
      job["Qualifications"].toLowerCase().includes(lowercasedQuery)
    );
  });

  return (
    <div>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Role or Qualification"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
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
