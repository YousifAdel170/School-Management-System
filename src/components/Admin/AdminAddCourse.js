// Importing necessary React hooks
import React, { useEffect, useRef, useState } from "react";

// Importing Bootstrap components for form and layout
import { Col, Form } from "react-bootstrap";

// Importing useNavigate hook to navigate to different routes
import { useNavigate } from "react-router-dom";

// Importing useSelector hook to access Redux store
import { useSelector } from "react-redux";

// Library for displaying toast notifications
import { ToastContainer } from "react-toastify";

// Importing configuration values
import {
  GET_METHOD,
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_ADD_SUBJECT,
  URL_GET_TEACHER_IDS,
  VIEW_SUBJECT_TYPE,
} from "../../scripts/config";

// Importing custom fetchData function to handle API calls
import { fetchData } from "../../Logic/fetchData";

// Importing custom functions to handle form input changes, handle submit
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Importing custom CSS for styling
import "./AdminAddStudent.css";

/**
 * AdminAddCourse component renders a form for adding a new subject in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const AdminAddCourse = () => {
  // State hooks to manage form data and validation messages
  const [subjectName, setSubjectName] = useState(""); // State for the subject name
  const [subjectCode, setSubjectCode] = useState(""); // State for the subject code
  const [teachingstaffID, setTeachingstaffID] = useState(""); // State for the selected teaching staff ID

  // Payload to be sent with request
  const payloadSubjects = { subjectName, subjectCode, teachingstaffID };

  // Getting the selected language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // State for error or success message
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // State for storing teacher IDs fetched from API
  const [teacherIDs, setTeacherIDs] = useState([]);

  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Refs to manage input fields
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  // useEffect hook to fetch teacher IDs on language change and set input field values
  useEffect(() => {
    fetchData(
      setTeacherIDs,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER_IDS,
      dataLanguage
    );
    setSubjectName(subjectNameRef.current.value);
    setSubjectCode(subjectCodeRef.current.value);
    setTeachingstaffID(teachingstaffIDRef.current.value);
  }, [dataLanguage]); // Re-run when language changes

  // useEffect hook to clear success message after a certain delay
  useEffect(() => {
    setTimeout(function () {
      setMsg(""); // Clear the message after the specified delay
    }, MESSAGE_DELAY);
  }, [msg]); // Triggered when msg state changes

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      {/* Display the heading based on the selected language */}
      <h3>{dataLanguage === "ar" ? "إضافة مادة" : "Add Subject"}</h3>

      {/* Form to add a new subject */}
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_ADD_SUBJECT,
            POST_METHOD,
            payloadSubjects,
            VIEW_SUBJECT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          {/* Title for the form */}
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "إضافة مادة جديدة" : "Add a New Subject"}
          </label>

          {/* Error or success message */}
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

          {/* Input field for subject name */}
          <input
            placeholder={dataLanguage === "ar" ? "اسم المادة" : "Subject Name"}
            type="text"
            ref={subjectNameRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectName"
            value={subjectName}
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectName",
                setError,
                setSubjectName,
                dataLanguage
              )
            }
          />

          {/* Input field for subject code */}
          <input
            placeholder={dataLanguage === "ar" ? "رمز المادة" : "Subject Code"}
            type="text"
            ref={subjectCodeRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectCode"
            value={subjectCode}
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectCode",
                setError,
                setSubjectCode,
                dataLanguage
              )
            }
          />

          {/* Dropdown for selecting teaching staff */}
          <Form.Select
            name="teachingstaffID"
            onChange={(e) => handleSelectChange(e, setTeachingstaffID)}
            ref={teachingstaffIDRef}
            value={teachingstaffID}
            className="mb-3"
          >
            <optgroup
              label={
                dataLanguage === "ar"
                  ? "اختيار اسم المعلم"
                  : "Select Teaching Staff Name"
              }
            >
              {/* Map through teacher IDs and display options */}
              {teacherIDs.length
                ? teacherIDs.map((teacherID, index) => (
                    <option key={index} value={`${teacherID.ID}`}>
                      {teacherID.name}
                    </option>
                  ))
                : null}
            </optgroup>
          </Form.Select>

          {/* Submit button */}
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "إضافة المادة" : "Add Course"}
          </button>
        </Col>

        {/* Toast container for displaying notifications */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

// Exporting the AdminAddCourse component for use in other parts of the application
export default AdminAddCourse;
