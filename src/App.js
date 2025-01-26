// Importing routing components for navigation
import { Routes, Route } from "react-router-dom";

// Import Pages
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

import ParentPage from "./Pages/ParentPage";
import StudentPage from "./Pages/StudentPage";
import TeacherPage from "./Pages/TeacherPage";
import SupervisorPage from "./Pages/SupervisorPage";

// Import Used Components
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/utilities/Footer";

// Import Admin Components
import AdminAddStudent from "./components/Admin/AdminAddStudent";
import AdminAddTeacher from "./components/Admin/AdminAddTeacher";
import AdminAddCourse from "./components/Admin/AdminAddCourse";

import AdminAdmission from "./components/Admin/AdminAdmission";
import AdminStatistics from "./components/Admin/AdminStatistics";

import AdminViewStudents from "./components/Admin/AdminViewStudents";
import AdminViewTeachers from "./components/Admin/AdminViewTeachers";
import AdminViewCourses from "./components/Admin/AdminViewCourses";

import AdminUpdateStudent from "./components/Admin/AdminUpdateStudent";
import AdminUpdateTeacher from "./components/Admin/AdminUpdateTeacher";
import AdminUpdateCourse from "./components/Admin/AdminUpdateCourse";

// Import Student Components
import StudentViewCourses from "./components/Student/StudentViewCourses";
import StudentViewTeachers from "./components/Student/StudentViewTeachers";

// Import Parent Components
import ParentViewCourses from "./components/Parent/ParentViewCourses";
import ParentViewTeachers from "./components/Parent/ParentViewTeachers";

// Import Teacher Components
import TeacherViewCourses from "./components/Teacher/TeacherViewCourses";
import TeacherViewTeachers from "./components/Teacher/TeacherViewTeachers";
import TeacherViewStudents from "./components/Teacher/TeacherViewStudents";

// Importing custom hook to set the text direction based on language
import useLanguageDirection from "./Logic/useLanguageDirection";

function App() {
  // Using the custom hook to adjust text direction
  useLanguageDirection();

  return (
    <div className="app">
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Supervisor Routes */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["2", "supervisor"]}
              userTypeRequired="supervisor"
            />
          }
        >
          <Route path="/supervisor" element={<SupervisorPage />}>
            {/* Supervisor specific sub-routes */}
            <Route path="/supervisor/admission" element={<AdminAdmission />} />
            <Route
              path="/supervisor/add_student"
              element={<AdminAddStudent />}
            />
            <Route
              path="/supervisor/view_students"
              element={<AdminViewStudents />}
            />
            <Route
              path="/supervisor/add_teacher"
              element={<AdminAddTeacher />}
            />
            <Route
              path="/supervisor/view_teachers"
              element={<AdminViewTeachers />}
            />
            <Route path="/supervisor/add_course" element={<AdminAddCourse />} />
            <Route
              path="/supervisor/view_courses"
              element={<AdminViewCourses />}
            />
            <Route
              path="/supervisor/statistics"
              element={<AdminStatistics />}
            />
            <Route
              path="/supervisor/update_student/:id"
              element={<AdminUpdateStudent />}
            />
            <Route
              path="/supervisor/update_teacher/:id"
              element={<AdminUpdateTeacher />}
            />
            <Route
              path="/supervisor/update_subject/:id"
              element={<AdminUpdateCourse />}
            />
          </Route>
        </Route>
        {/* Teachers Routes */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["2", "teacher"]}
              userTypeRequired="teacher"
            />
          }
        >
          <Route path="/teacher" element={<TeacherPage />}>
            {/* Teacher specific sub-routes */}
            <Route
              path="/teacher/view_students"
              element={<TeacherViewStudents />}
            />
            <Route
              path="/teacher/view_teachers"
              element={<TeacherViewTeachers />}
            />
            <Route
              path="/teacher/view_courses"
              element={<TeacherViewCourses />}
            />
          </Route>
        </Route>
        {/* Students Routes */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["1"]} userTypeRequired="student" />
          }
        >
          <Route path="/student" element={<StudentPage />}>
            {/* Students specific sub-routes */}
            <Route
              path="/student/view_courses"
              element={<StudentViewCourses />}
            />
            <Route
              path="/student/view_teachers"
              element={<StudentViewTeachers />}
            />
          </Route>
        </Route>
        {/* Parents Routes */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["3"]} userTypeRequired="parent" />
          }
        >
          <Route path="/parent" element={<ParentPage />}>
            {/* Parents specific sub-routes */}
            <Route
              path="/parent/view_courses"
              element={<ParentViewCourses />}
            />
            <Route
              path="/parent/view_teachers"
              element={<ParentViewTeachers />}
            />
          </Route>
        </Route>
      </Routes>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
