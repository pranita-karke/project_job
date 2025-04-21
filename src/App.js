// import { useState } from "react";
// import LandingPage from "./Components/LoginForm/LandingPage";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import RegisterForm from "./Components/LoginForm/RegisterForm";
// import JobList from "./Components/JobList/JobList";

// function App() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true); // Show login form when the login button is clicked
//   };

//   return (
//     <div className="App">
//       {/* Show Landing Page if not logged in */}
//       {!isLoggedIn ? (
//         <div>
//           {!showLogin ? (
//             <LandingPage onLoginClick={handleLoginClick} />
//           ) : (
//             <>
//               {isRegistering ? (
//                 <RegisterForm
//                   setIsRegistering={setIsRegistering}
//                   setIsLoggedIn={setIsLoggedIn}
//                 />
//               ) : (
//                 <LoginForm
//                   setIsRegistering={setIsRegistering}
//                   setIsLoggedIn={setIsLoggedIn} // Pass the setIsLoggedIn prop
//                 />
//               )}
//             </>
//           )}
//         </div>
//       ) : (
//         // Once logged in, show job listings page
//         <div>
//           <nav className="navbar">
//             <h1>Job Portal</h1>

//             {/* Job Recommendation Button */}
//             <button
//               className="recommendation-btn"
//               onClick={() => {
//                 window.location.href = "http://localhost:8501"; // This will navigate to Streamlit directly in the same tab
//               }}
//             >
//               Get Job Recommendations
//             </button>

//             {/* Logout Button */}
//             <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
//               Logout
//             </button>
//           </nav>

//           <h1>Job Listings</h1>
//           <JobList />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import LandingPage from "./Components/LoginForm/LandingPage";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import RegisterForm from "./Components/LoginForm/RegisterForm";
// import JobList from "./Components/JobList/JobList";
// import { GoogleOAuthProvider } from "@react-oauth/google"; // Import the Google OAuth provider

// function App() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true); // Show login form when the login button is clicked
//   };

//   return (
//     // Wrap your app with GoogleOAuthProvider
//     <GoogleOAuthProvider clientId="942562143186-7rf5vfv690pokpdv6teoj2k3a4u08qqi.apps.googleusercontent.com">
//       <div className="App">
//         {/* Show Landing Page if not logged in */}
//         {!isLoggedIn ? (
//           <div>
//             {!showLogin ? (
//               <LandingPage onLoginClick={handleLoginClick} />
//             ) : (
//               <>
//                 {isRegistering ? (
//                   <RegisterForm
//                     setIsRegistering={setIsRegistering}
//                     setIsLoggedIn={setIsLoggedIn}
//                   />
//                 ) : (
//                   <LoginForm
//                     setIsRegistering={setIsRegistering}
//                     setIsLoggedIn={setIsLoggedIn} // Pass the setIsLoggedIn prop
//                   />
//                 )}
//               </>
//             )}
//           </div>
//         ) : (
//           // Once logged in, show job listings page
//           <div>
//             <nav className="navbar">
//               <h1 style={{color: "#ff725e"}}>Job Portal</h1>

//               {/* Job Recommendation Button */}
//               <button
//                 className="recommendation-btn"
//                 onClick={() => {
//                   window.location.href = "http://localhost:8501"; // This will navigate to Streamlit directly in the same tab
//                 }}
//               >
//                 Get Job Recommendations
//               </button>

//               {/* Logout Button */}
//               <button
//                 className="logout-btn"
//                 onClick={() => setIsLoggedIn(false)}
//               >
//                 Logout
//               </button>
//             </nav>

//             <h1>Job Listings</h1>
//             <JobList />
//           </div>
//         )}
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

/* Updated App.js */

// import { useState } from "react";
// import LandingPage from "./Components/LoginForm/LandingPage";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import RegisterForm from "./Components/LoginForm/RegisterForm";
// import JobList from "./Components/JobList/JobList";
// import { GoogleOAuthProvider } from "@react-oauth/google"; // Import the Google OAuth provider

// function App() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true); // Show login form when the login button is clicked
//   };

//   return (
//     // Wrap your app with GoogleOAuthProvider
//     <GoogleOAuthProvider clientId="942562143186-7rf5vfv690pokpdv6teoj2k3a4u08qqi.apps.googleusercontent.com">
//       <div className="App">
//         {/* Show Landing Page if not logged in */}
//         {!isLoggedIn ? (
//           <div>
//             {!showLogin ? (
//               <LandingPage onLoginClick={handleLoginClick} />
//             ) : (
//               <>
//                 {isRegistering ? (
//                   <RegisterForm
//                     setIsRegistering={setIsRegistering}
//                     setIsLoggedIn={setIsLoggedIn}
//                   />
//                 ) : (
//                   <LoginForm
//                     setIsRegistering={setIsRegistering}
//                     setIsLoggedIn={setIsLoggedIn} // Pass the setIsLoggedIn prop
//                   />
//                 )}
//               </>
//             )}
//           </div>
//         ) : (
//           // Once logged in, show job listings page
//           <div>
//             <nav className="navbar">
//               <h1 style={{ color: "#ff725e", fontSize: "40px"}}>Job Portal</h1>

//               <div className="nav-buttons">

//                 {/* Job Recommendation Button */}
//                 <button
//                   className="cv-btn"
//                   onClick={() => {
//                     window.location.href = "http://localhost:5000"; // This will navigate to Streamlit directly in the same tab
//                   }}
//                 >
//                   Upload your CV
//                 </button>

//                 {/* Job Recommendation Button */}
//                 <button
//                   className="recommendation-btn"
//                   onClick={() => {
//                     window.location.href = "http://localhost:8501"; // This will navigate to Streamlit directly in the same tab
//                   }}
//                 >
//                   Get Job Recommendations
//                 </button>

//                 {/* Logout Button */}
//                 <button
//                   className="logout-btn"
//                   onClick={() => setIsLoggedIn(false)}
//                 >
//                   Logout
//                 </button>
//               </div>
//             </nav>

//             <h1>Job Listings</h1>
//             <JobList />
//           </div>
//         )}
//       </div>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LoginForm/LandingPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/LoginForm/RegisterForm";
import CompanyDashboard from "./Components/Company/comlanding";
import CompanyJobList from "./Components/Company/jobslist";
import JobList from "./Components/JobList/JobList";
import AddJob from "./Components/Company/AddJob";
import AllVacancies from "./Components/JobList/AllVacancies";
import ApplyForm from "./Components/JobList/ApplyForm";
import ApplicationsList from "./Components/Company/ApplicationsList";
import AdminPanel from "./Components/Admin/AdminPanel";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <GoogleOAuthProvider clientId="942562143186-7rf5vfv690pokpdv6teoj2k3a4u08qqi.apps.googleusercontent.com">
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <div>
                    {!showLogin ? (
                      <LandingPage onLoginClick={handleLoginClick} />
                    ) : (
                      <>
                        {isRegistering ? (
                          <RegisterForm
                            setIsRegistering={setIsRegistering}
                            setIsLoggedIn={setIsLoggedIn}
                          />
                        ) : (
                          <LoginForm
                            setIsRegistering={setIsRegistering}
                            setIsLoggedIn={setIsLoggedIn}
                          />
                        )}
                      </>
                    )}
                  </div>
                ) : (
                  <div>
                    <JobList />
                  </div>
                )
              }
            />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/company-jobs" element={<CompanyJobList />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/view-vacancies" element={<AllVacancies />} />
            <Route path="/apply-form" element={<ApplyForm />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/applications" element={<ApplicationsList />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
