import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// optional styling file if needed

const AllVacancies = () => {
  const navigate = useNavigate(); // ✅ Moved inside the component
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/vacancies") // Make sure this Flask route exists and returns data
      .then((res) => setVacancies(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleApply = (vacancy) => {
    navigate("/apply-form", { state: { vacancy } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>All Open Vacancies</h2>
      {vacancies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No vacancies available</p>
      ) : (
        <div
          className="vacancy-list"
          style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
        >
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="vacancy-card"
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "300px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{vacancy.companyName}</h3>
              <p>
                <strong>Company:</strong> {vacancy.company}
              </p>
              <p>
                <strong>Role:</strong> {vacancy.role}
              </p>
              <p>
                <strong>Qualifications:</strong> {vacancy.qualifications}
              </p>
              <p>
                <strong>Experience:</strong> {vacancy.experience}
              </p>
              <p>
                <strong>Description:</strong> {vacancy.description}
              </p>
              <button
                onClick={() => handleApply(vacancy)}
                style={{
                  backgroundColor: "#ff725e",
                  color: "#fff",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVacancies;
