import React, { useState } from "react";
import axios from "axios";

const GenerateCV = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [cvImage, setCvImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data to send to Python
    const formData = { name, skills, experience };

    try {
      // Sending data to the Python backend for CV generation
      const response = await axios.post(
        "http://localhost:5000/generate-cv",
        formData,
        {
          responseType: "blob", // To handle image response
        }
      );

      // Handle the image returned from Python
      const imageUrl = URL.createObjectURL(response.data);
      setCvImage(imageUrl);
    } catch (err) {
      setError("Error generating CV");
    }
  };

  return (
    <div className="cv-form">
      <h1>Generate Your CV</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <button type="submit">Generate CV</button>
      </form>

      {error && <p>{error}</p>}

      {cvImage && (
        <div>
          <h2>Your Generated CV</h2>
          <img src={cvImage} alt="Generated CV" />
        </div>
      )}
    </div>
  );
};

export default GenerateCV;
