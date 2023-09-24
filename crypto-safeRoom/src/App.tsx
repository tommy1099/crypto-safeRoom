import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/Auth/Login/LoginPage/LoginPage";
import SignupPage from "./pages/Auth/Signup/SignupPage/SignupPage";

function App() {
  return (
    <div
    // style={{
    //   background: `url("/crypto-safeRoom/src/assets/img/cryptocurrency-financial-items-seamless-pattern-vector-background_153454-5871.jpg")`,
    //   filter: "grayscale(30%)",
    //   width: "100%",
    //   height: "100vh",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <Routes>
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/profile" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} /> {/*Done*/}
        <Route path="/auth/login" element={<LoginPage />} /> {/*Done*/}
        <Route path="/auth/forgot" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} /> {/*Done*/}
      </Routes>
    </div>
  );
}

export default App;
