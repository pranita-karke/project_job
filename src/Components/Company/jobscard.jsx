// import React, { useState } from "react";
// import "../JobList/Job.css";

// const CompanyJobCard = ({ job }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const openVacancy = () => {
//     fetch("http://localhost:5001/vacancies", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         company: job.CompanyName || "Default Company", // Ensure company name is included in job
//         title: job["Job Title"],
//         role: job["Role"],
//         qualifications: job["Qualifications"],
//         experience: job["Experience"],
//         description: job["Job Description"],
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert("Vacancy opened!");
//       })
//       .catch((err) => console.error("Error opening vacancy:", err));
//   };

//   return (
//     <div
//       className="job-card"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h2
//         className="job-title"
//         style={{ color: "#ff725e", textAlign: "center" }}
//       >
//         {job["Job Title"]}
//       </h2>

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

//       <button className="apply-btn" onClick={openVacancy}>
//         Open Vacancy
//       </button>
//     </div>
//   );
// };

// export default CompanyJobCard;
import React, { useState } from "react";
import "../JobList/Job.css";

const CompanyJobCard = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false); // optional

  const openVacancy = () => {
    setLoading(true);

    const vacancyData = {
      company: job.CompanyName || job["Company Name"] || "Default Company",
      title: job["Job Title"],
      role: job["Role"],
      qualifications: job["Qualifications"],
      experience: job["Experience"],
      description: job["Job Description"],
    };

    fetch("http://localhost:5001/vacancies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vacancyData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Vacancy opened successfully!");
      })
      .catch((err) => {
        console.error("Error opening vacancy:", err);
        alert("Failed to open vacancy. Please try again.");
      })
      .finally(() => setLoading(false));
  };

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

      <button className="apply-btn" onClick={openVacancy} disabled={loading}>
        {loading ? "Opening..." : "Open Vacancy"}
      </button>
    </div>
  );
};

export default CompanyJobCard;
