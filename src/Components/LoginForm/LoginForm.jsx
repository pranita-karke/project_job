// import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";
// // import "./LoginForm.css";

// const LoginForm = ({ setIsRegistering, setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("password", password);

//     try {
//       const response = await fetch("http://localhost/project_job/login.php", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setMessage(data.message || data.error);

//       // If login is successful, set isLoggedIn to true
//       if (data.success) {
//         setIsLoggedIn(true); // Update login state in the parent component (App.js)
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setMessage("An error occurred during login.");
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder="Username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <FaUser className="icon" />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <FaLock className="icon" />
//         </div>
//         <button type="submit">Login</button>
//         <p>{message}</p>
//         <div className="register-link">
//           <p>
//             Don't have an account?{" "}
//             <a href="#" onClick={() => setIsRegistering(true)}>
//               Register
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// THIS WORKSSSSS
// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import "./LoginForm.css";

// const LoginForm = ({ setIsRegistering, setIsLoggedIn }) => {
//   const handleLoginSuccess = (response) => {
//     console.log("Login Successful:", response);
//     setIsLoggedIn(true);
//   };

//   const handleLoginFailure = (error) => {
//     console.error("Login Failed:", error);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
//         <p>
//           Don't have an account?{" "}
//           <a href="#" onClick={() => setIsRegistering(true)}>
//             Register Here.
//           </a>
//         </p>
//       </div>

//       {/* Image below login box */}
//       <img src="/office.png" alt="Office" className="login-image" />
//     </div>
//   );
// };

// export default LoginForm;

// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import "./LoginForm.css";
// // Import the image directly if it's in your assets folder
// import officeImage from "../Assets/office.png"; // Adjust path as needed

// const LoginForm = ({ setIsRegistering, setIsLoggedIn }) => {
//   const handleLoginSuccess = (response) => {
//     console.log("Login Successful:", response);
//     setIsLoggedIn(true);
//   };

//   const handleLoginFailure = (error) => {
//     console.error("Login Failed:", error);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
//         <p>
//           Don't have an account?{" "}
//           <a href="#" onClick={() => setIsRegistering(true)}>
//             Register Here.
//           </a>
//         </p>
//       </div>

//       {/* Image below login box */}
//       <img
//         src={officeImage}
//         alt="Office"
//         className="login-image"
//       />
//     </div>
//   );
// };

// export default LoginForm;

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./LoginForm.css";

const LoginForm = ({ setIsRegistering, setIsLoggedIn }) => {
  const handleLoginSuccess = (response) => {
    console.log("Login Successful:", response);
    setIsLoggedIn(true);
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ color: "#ff725e" }}>Login</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        <p>
          Don't have an account?{" "}
          <span
            onClick={() => setIsRegistering(true)}
            className="register-link"
          >
            Register Here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
