import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import {
  Contact,
  ForgotPage,
  LoginPage,
  SignupPage,
  NotFound,
  Signals,
  News,
} from "./pages";
// import { BackgroundPattern } from "./components/ui";

function App() {
  return (
    <div className="">
      {/* <BackgroundPattern /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/tutorial" element={<WelcomePage />} />
        <Route path="/events" element={<WelcomePage />} />
        <Route path="/profile" element={<WelcomePage />} />
        <Route path="/Signals" element={<Signals />} /> {/*Done*/}
        <Route path="/contact" element={<Contact />} /> {/*Done*/}
        <Route path="/welcome" element={<WelcomePage />} /> {/*Done*/}
        <Route path="/auth/login" element={<LoginPage />} /> {/*Done*/}
        <Route path="/auth/forgot" element={<ForgotPage />} /> {/*Done*/}
        <Route path="/auth/signup" element={<SignupPage />} /> {/*Done*/}
        <Route path="*" element={<NotFound />} /> {/*Done*/}
      </Routes>
    </div>
  );
}

export default App;
