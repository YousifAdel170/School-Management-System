// Import necessary hooks and components from React
import React, { useEffect, useState } from "react";

// Import necessary components from React Bootstrap
import { Table } from "react-bootstrap";

// Import navigation hooks from React Router
import { useNavigate } from "react-router-dom";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

// Import ToastContainer for displaying notifications
import { ToastContainer } from "react-toastify";

/**
 * Import Custom Functions
 * fetchData is a custom function to fetch data from an API
 * handleDelete is a funtion to Handle the deletion of a specific item and update the UI accordingly.
 * handleNavigateUpdate is a funtion to Handle navigation to an update page for a specific item.
 */
import { fetchData } from "../../Logic/fetchData";
import { handleDelete } from "../../Logic/handleDelete";
import { handleNavigateUpdate } from "../../Logic/handleNavigateUpdate";

// Import constants from configuration file
import {
  addSubjectsHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  SUBJECT_TYPE,
  UPDATE_SUBJECT_TYPE,
  URL_DELELE_SUBJECT,
  URL_GET_SUBJECTS,
} from "../../scripts/config";

// Import custom CSS for styling
import "./AdminAdmission.css";

/**
 * AdminViewCourses component displays a table of subjects and allows the admin to update or delete subject details.
 * The subjects are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const AdminViewCourses = () => {
  // State variables for form data
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);

  // Get the language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Effect to fetch data when the component mounts or language changes
  useEffect(() => {
    fetchData(
      setSubjectsData,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_SUBJECTS,
      dataLanguage
    );
  }, [dataLanguage]);

  /**
   * useEffect hook to clear the success message after a specified delay.
   */
  useEffect(() => {
    setTimeout(() => {
      setMsg(""); // Clear the message
    }, MESSAGE_DELAY);
  }, [msg]); // Effect runs when the success message (msg) changes

  return (
    <div className="table">
      {/* Table title, dynamically rendered based on the selected language */}
      <h3>{dataLanguage === "ar" ? "جدول المواد" : "Subjects Table"}</h3>

      {/* Displaying error or success messages */}
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>

      {/* Subjects table */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {/* Loop through addSubjectsHeadings to display table headers */}
            {addSubjectsHeadings.length
              ? addSubjectsHeadings.map((heading, index) => (
                  <th key={index}>
                    {/* Dynamic table header based on language */}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
            {addSubjectsHeadings.length ? (
              <>
                <th>{dataLanguage === "ar" ? "تحديث" : "Update"}</th>
                <th>{dataLanguage === "ar" ? "حذف" : "Delete"}</th>
              </>
            ) : null}
          </tr>
        </thead>

        <tbody>
          {/* Loop through subjectsData to display the rows */}
          {subjectsData.length ? (
            subjectsData.map((subject, index) => (
              <tr key={index}>
                <td>{subject.ID}</td>
                <td>{subject.subject_name}</td>
                <td>{subject.subject_code}</td>
                <td>{subject.teachingstaff_ID}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleNavigateUpdate(
                        e,
                        navigate,
                        UPDATE_SUBJECT_TYPE,
                        subject.ID
                      )
                    }
                  >
                    {dataLanguage === "ar" ? "تحديث" : "Update"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) =>
                      handleDelete(
                        e,
                        subject.ID,
                        SUBJECT_TYPE,
                        `${URL_DELELE_SUBJECT}${subject.ID}`,
                        setSubjectsData,
                        setMsg,
                        setError,
                        GET_METHOD,
                        URL_GET_SUBJECTS,
                        dataLanguage
                      )
                    }
                  >
                    {dataLanguage === "ar" ? "حذف" : "Delete"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={addSubjectsHeadings.length} className="text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Toast container to show success/error messages */}
      <ToastContainer style={{ marginTop: "80px" }} />
    </div>
  );
};

// Exporting the AdminViewCourses component to be used in other parts of the application
export default AdminViewCourses;
