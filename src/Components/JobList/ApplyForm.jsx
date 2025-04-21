import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vacancy } = location.state || {};

  const [name, setName] = useState("");
  const [cv, setCv] = useState(null);

  if (!vacancy) {
    return <p style={{ textAlign: "center" }}>No vacancy selected.</p>;
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("role", vacancy.role);
  //   formData.append("company", vacancy.companyName);
  //   formData.append("cv", cv);

  //   try {
  //     const res = await axios.post("http://localhost:5001/apply-job", formData);
  //     alert(res.data.message);
  //     navigate("/");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Failed to apply. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", vacancy.role);
    formData.append("company", vacancy.company || vacancy.companyName);
    formData.append("cv", cv);

    try {
      const res = await axios.post("http://localhost:5001/apply-job", formData);
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to apply. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Apply for {vacancy.role}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ marginBottom: "15px" }}>
          <label>Role:</label>
          <input
            type="text"
            value={vacancy.role}
            readOnly
            className="form-control"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Your Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Upload CV (PDF):</label>
          <input
            type="file"
            accept=".pdf"
            required
            onChange={(e) => setCv(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
