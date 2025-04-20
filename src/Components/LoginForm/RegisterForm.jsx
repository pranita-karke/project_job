import React, { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = ({ setIsRegistering }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default to user
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("role", role);
    if (role === "company") {
      formData.append("companyName", companyName);
      formData.append("companyDescription", companyDescription);
    } // Add role here

    try {
      const response = await fetch(
        "http://127.0.0.1/project_job/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const data = await response.json();

      if (data.message) {
        setMessage(data.message);
      } else if (data.error) {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Failed to connect to the server.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {/* Role Selection Dropdown */}
        <div className="input-box">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="company">Company</option>
          </select>
        </div>

        {/* ✅ Company fields only shown if "company" is selected */}
        {role === "company" && (
          <>
            <div className="input-box">
              <input
                type="text"
                placeholder="Company Name"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <textarea
                placeholder="Company Description"
                required
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            </div>
          </>
        )}

        <button type="submit">Register</button>
        <p>{message}</p>

        <div className="register-link">
          <p>
            Go back to{" "}
            <a href="#" onClick={() => setIsRegistering(false)}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
