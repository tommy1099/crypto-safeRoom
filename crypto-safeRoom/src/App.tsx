import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Contact, ForgotPage, LoginPage, SignupPage, NotFound } from "./pages";
import { BackgroundPattern } from "./components/ui";

function App() {
  return (
    <div
      className="m-0 p-0 box-border"

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
      <BackgroundPattern />
      <Routes>
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/profile" element={<WelcomePage />} />
        <Route path="/contact" element={<Contact />} /> {/*Done*/}
        <Route path="/welcome" element={<WelcomePage />} /> {/*Done*/}
        <Route path="/auth/login" element={<LoginPage />} /> {/*Done*/}
        <Route path="/auth/forgot" element={<ForgotPage />} /> {/*Done*/}
        <Route path="/auth/signup" element={<SignupPage />} /> {/*Done*/}
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
