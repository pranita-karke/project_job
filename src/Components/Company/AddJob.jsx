// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../JobList/Job.css"; // reuse styling if needed

// const AddJob = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newJob = {
//       "Job Id": e.target.jobId.value,
//       Experience: e.target.experience.value,
//       Qualifications: e.target.qualifications.value,
//       "Salary Range": e.target.salary.value,
//       location: e.target.location.value,
//       "Work Type": e.target.workType.value,
//       "Job Posting Date": e.target.date.value,
//       "Job Title": e.target.title.value,
//       Role: e.target.role.value,
//       "Job Description": e.target.description.value,
//       Skills: e.target.skills.value,
//       Company: e.target.company.value,
//     };

//     fetch("http://localhost:5001/add-job", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newJob),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         navigate("/company-jobs"); // ✅ Redirect here
//       })
//       .catch((err) => console.error("Error adding job:", err));
//   };

//   return (
//     <div className="job-form">
//       <h2>Add New Job</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="jobId" type="text" placeholder="Job ID" required />
//         <input
//           name="experience"
//           type="text"
//           placeholder="Experience"
//           required
//         />
//         <input
//           name="qualifications"
//           type="text"
//           placeholder="Qualifications"
//           required
//         />
//         <input name="salary" type="text" placeholder="Salary Range" required />
//         <input name="location" type="text" placeholder="Location" required />
//         <input name="workType" type="text" placeholder="Work Type" required />
//         <input
//           name="date"
//           type="date"
//           placeholder="Job Posting Date"
//           required
//         />
//         <input name="title" type="text" placeholder="Job Title" required />
//         <input name="role" type="text" placeholder="Role" required />
//         <textarea name="description" placeholder="Job Description" required />
//         <input
//           name="skills"
//           type="text"
//           placeholder="Skills (Comma Separated)"
//           required
//         />
//         <input name="company" type="text" placeholder="Company Name" required />
//         <button type="submit">Add Job</button>
//       </form>
//     </div>
//   );
// };

// export default AddJob;
// AddJob.js (Updated)
import React from "react";
import { useNavigate } from "react-router-dom";
import "../JobList/Job.css"; // reuse styling if needed

const AddJob = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      "Job Id": e.target.jobId.value,
      Experience: e.target.experience.value,
      Qualifications: e.target.qualifications.value,
      "Salary Range": e.target.salary.value,
      location: e.target.location.value,
      "Work Type": e.target.workType.value,
      "Job Posting Date": e.target.date.value,
      "Job Title": e.target.title.value,
      Role: e.target.role.value,
      "Job Description": e.target.description.value,
      Skills: e.target.skills.value,
      Company: e.target.company.value,
    };

    fetch("http://localhost:5001/add-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/company-jobs"); // Redirect to company job list
      })
      .catch((err) => console.error("Error adding job:", err));
  };

  return (
    <div className="job-form">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="jobId" type="text" placeholder="Job ID" required />
        <input
          name="experience"
          type="text"
          placeholder="Experience"
          required
        />
        <input
          name="qualifications"
          type="text"
          placeholder="Qualifications"
          required
        />
        <input name="salary" type="text" placeholder="Salary Range" required />
        <input name="location" type="text" placeholder="Location" required />
        <input name="workType" type="text" placeholder="Work Type" required />
        <input
          name="date"
          type="date"
          placeholder="Job Posting Date"
          required
        />
        <input name="title" type="text" placeholder="Job Title" required />
        <input name="role" type="text" placeholder="Role" required />
        <textarea name="description" placeholder="Job Description" required />
        <input
          name="skills"
          type="text"
          placeholder="Skills (Comma Separated)"
          required
        />
        <input name="company" type="text" placeholder="Company Name" required />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
