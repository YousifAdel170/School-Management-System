import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Footer from "./components/utilities/Footer";
import ParentPage from "./Pages/ParentPage";
import ContactPage from "./Pages/ContactPage";
import StudentPage from "./Pages/StudentPage";
import TeacherPage from "./Pages/TeacherPage";
import SupervisorPage from "./Pages/SupervisorPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/parent" element={<ParentPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/supervisor" element={<SupervisorPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
