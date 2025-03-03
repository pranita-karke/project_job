import { useState } from "react";
import LandingPage from "./Components/LoginForm/LandingPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/LoginForm/RegisterForm";
import JobList from "./Components/JobList/JobList";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true); // Show login form when the login button is clicked
  };

  return (
    <div className="App">
      {/* Show Landing Page if not logged in */}
      {!isLoggedIn ? (
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
                  setIsLoggedIn={setIsLoggedIn} // Pass the setIsLoggedIn prop
                />
              )}
            </>
          )}
        </div>
      ) : (
        // Once logged in, show job listings page
        <div>
          <nav className="navbar">
            <h1>Job Portal</h1>

            {/* Job Recommendation Button */}
            <button
              className="recommendation-btn"
              onClick={() => {
                window.location.href = "http://localhost:8501"; // This will navigate to Streamlit directly in the same tab
              }}
            >
              Get Job Recommendations
            </button>

            {/* Logout Button */}
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </nav>

          <h1>Job Listings</h1>
          <JobList />
        </div>
      )}
    </div>
  );
}

export default App;

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
//     <GoogleOAuthProvider clientId="520996047763-gjr4f88tvqlj3g2loroo33gq04i8sbjq.apps.googleusercontent.com">
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
//               <h1>Job Portal</h1>

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
