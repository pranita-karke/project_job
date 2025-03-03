import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css";

const LoginForm = ({ setIsRegistering, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost/project_job/login.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message || data.error);

      // If login is successful, set isLoggedIn to true
      if (data.success) {
        setIsLoggedIn(true); // Update login state in the parent component (App.js)
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred during login.");
    }
  };

  //   const response = await fetch("http://localhost/project_job/login.php", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();
  //   setMessage(data.message || data.error);

  //   // If login is successful, set isLoggedIn to true
  //   if (data.success) {
  //     setIsLoggedIn(true); // Update login state in the parent component (App.js)
  //   }
  // };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
        <p>{message}</p>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={() => setIsRegistering(true)}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
