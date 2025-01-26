// Importing necessary React hooks
import React, { useEffect, useRef, useState } from "react";

// Importing Bootstrap components for form and layout
import { Col, Form } from "react-bootstrap";

// Importing useNavigate hook to navigate to different routes, usePararms to get the updatedID in the URL
import { useNavigate, useParams } from "react-router-dom";

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
  URL_GET_TEACHER_IDS,
  URL_UPDATE_SUBJECT,
  VIEW_SUBJECT_TYPE,
} from "../../scripts/config";

/**
 * Import Custom Functions
 * fetchData is a custom function to fetch data from an API
 * handleInputChange is a funtion to Handle input changes and validate based on the type of input.
 * handleSelectChange is a funtion to Handle the change of the selection options in a dropdown.
 */
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { fetchData } from "../../Logic/fetchData";
import { handleSubmit } from "../../Logic/handleSubmit";

// Importing custom CSS for styling
import "./AdminAddStudent.css";

/**
 * AdminUpdateCourse component allows the admin to update a subject's details.
 * It fetches teacher IDs and allows the admin to modify subject name, code, and assign a teaching staff.
 */
const AdminUpdateCourse = () => {
  /**
   * Retrieve the course ID from the URL using useParams.
   * This will be used to fetch and update the subject details.
   * @param {string} id - The ID of the course to be updated.
   */
  const { id } = useParams();

  // Using Redux selector to access the current language setting
  const dataLanguage = useSelector((state) => state.language);

  // State variables to store subject details and form state
  const [subjectName, setSubjectName] = useState(""); // Store the subject name
  const [subjectCode, setSubjectCode] = useState(""); // Store the subject code
  const [teachingstaffID, setTeachingstaffID] = useState(""); // Store the selected teacher ID
  const [updatedID, setUpdatedID] = useState(null); // Store the ID of the subject to be updated
  const [teacherIDs, setTeacherIDs] = useState([]); // State variable to store fetched teacher IDs

  // State variables for handling error and success messages
  const [error, setError] = useState(""); // Error message
  const [msg, setMsg] = useState(""); // Success message

  // Hook for navigation using React Router
  const navigate = useNavigate();

  // Refs for accessing the input fields in the form
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  // Payload to be sent for updating the subject
  const payloadUpdateSubjects = {
    updatedID,
    subjectName,
    subjectCode,
    teachingstaffID,
  };

  /**
   * useEffect hook to fetch teacher IDs and set the subject details
   * The data is fetched when the component mounts or when the language changes.
   */
  useEffect(() => {
    // Fetch teacher IDs to populate the dropdown options
    fetchData(
      setTeacherIDs,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER_IDS,
      dataLanguage
    );

    // Set the ID and subject details for updating
    setUpdatedID(id);
    setSubjectName(subjectNameRef.current.value);
    setSubjectCode(subjectCodeRef.current.value);
    setTeachingstaffID(teachingstaffIDRef.current.value);
  }, [id, dataLanguage]);

  /**
   * useEffect hook to clear the success message after a specified delay.
   * This helps in clearing out notifications after they are shown.
   */
  useEffect(() => {
    // Clear success message after MESSAGE_DELAY milliseconds
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      {/* Render the title of the page */}
      <h3>{dataLanguage === "ar" ? "تحديث المادة" : "Update Subject"}</h3>

      <form
        onSubmit={(e) =>
          handleSubmit(
            e, // Prevent default form submission
            setMsg, // Set the success message on successful form submission
            setError, // Set the error message if something goes wrong
            dataLanguage, // Pass the current language for localization
            navigate, // Use navigate to redirect on success
            URL_UPDATE_SUBJECT, // API URL to update subject
            POST_METHOD, // Use POST method for form submission
            payloadUpdateSubjects, // Payload to be sent in the API request
            VIEW_SUBJECT_TYPE, // Subject type view (used in the URL)
            SUPERVISOR_ROLE // Role-based validation for admin
          )
        }
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        {/* Form columns and input fields */}
        <Col sm="12" className="d-flex flex-column">
          {/* Title for the form */}
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "تحديث المادة" : "Update The Subject"}
          </label>

          {/* Display error or success message */}
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

          {/* Subject name input field */}
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

          {/* Subject code input field */}
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

          {/* Teacher selection dropdown */}
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
                  ? "اختر اسم المعلم"
                  : "Select Teaching Staff Name"
              }
            >
              {teacherIDs.length
                ? teacherIDs.map((teacherID, index) => (
                    <option key={index} value={`${teacherID.ID}`}>
                      {teacherID.name}
                    </option>
                  ))
                : null}
            </optgroup>
          </Form.Select>

          {/* Submit button for form */}
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث المادة" : "Update Course"}
          </button>
        </Col>

        {/* Toast notifications for success or error messages */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateCourse;
