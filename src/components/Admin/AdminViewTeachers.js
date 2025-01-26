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

// Import constants from configuration fil
import {
  addTeacherHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  TEACHER_TYPE,
  UPDATE_TEACHER_TYPE,
  URL_DELELE_TEACHER,
  URL_GET_TEACHER,
} from "../../scripts/config";

// Import custom CSS for styling
import "./AdminAdmission.css";

/**
 * AdminViewTeachers component displays a table of teachers and allows the admin to update or delete teacher details.
 * The teachers are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const AdminViewTeachers = () => {
  // State variables for form data
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);

  // Get the language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Effect to fetch data when the component mounts or language changes
  useEffect(() => {
    fetchData(
      setTeachersData,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER,
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
      <h3>{dataLanguage === "ar" ? "جدول المعلمين" : "Teachers Table"}</h3>

      {/* Displaying error or success messages */}
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>

      {/* teachers table */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {/* Loop through addTeacherHeadings to display table headers */}
            {addTeacherHeadings.length
              ? addTeacherHeadings.map((heading, index) => (
                  <th key={index}>
                    {/* Dynamic table header based on language */}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
            {addTeacherHeadings.length ? (
              <>
                <th>{dataLanguage === "ar" ? "تحديث" : "Update"}</th>
                <th>{dataLanguage === "ar" ? "حذف" : "Delete"}</th>
              </>
            ) : null}
          </tr>
        </thead>

        <tbody>
          {/* Loop through teachersData to display the rows */}
          {teachersData.length ? (
            teachersData.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.ID}</td>
                <td>{teacher.name}</td>
                <td>{teacher.specialization}</td>
                <td>{teacher.address}</td>
                <td>{teacher.BOD}</td>
                <td>{teacher.hire_date}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.salary}</td>
                <td>
                  {teacher.supervisorID ? `${teacher.supervisorID}` : "None"}
                </td>
                <td>{teacher.user_id}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleNavigateUpdate(
                        e,
                        navigate,
                        UPDATE_TEACHER_TYPE,
                        teacher.user_id
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
                        teacher.user_id,
                        TEACHER_TYPE,
                        `${URL_DELELE_TEACHER}${teacher.user_id}`,
                        setTeachersData,
                        setMsg,
                        setError,
                        GET_METHOD,
                        URL_GET_TEACHER,
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
              <td colSpan={addTeacherHeadings.length} className="text-center">
                No Teachers Found.
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

// Exporting the AdminViewTeachers component to be used in other parts of the application
export default AdminViewTeachers;
