// Import necessary hooks and components from React
import React, { useEffect, useState } from "react";

// Import necessary components from React Bootstrap
import { Table } from "react-bootstrap";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

/**
 * Import Custom Functions
 * fetchData is a custom function to fetch data from an API
 */
import { fetchData } from "../../Logic/fetchData";

// Import constants from configuration fil
import {
  GET_METHOD,
  MESSAGE_DELAY,
  URL_GET_TEACHER,
  viewTeacherHeading,
} from "../../scripts/config";

// Import custom CSS for styling
import "../Admin/AdminAdmission.css";

/**
 * ParentViewTeachers component displays a table of teachers.
 * The teachers are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const ParentViewTeachers = () => {
  // State variables for form data
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);

  // Get the language from Redux store
  const dataLanguage = useSelector((state) => state.language);

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
            {/* Loop through viewTeacherHeading to display table headers */}
            {viewTeacherHeading.length
              ? viewTeacherHeading.map((heading, index) => (
                  <th key={index}>
                    {/* Dynamic table header based on language */}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
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
                <td>{teacher.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={viewTeacherHeading.length} className="text-center">
                {dataLanguage === "ar"
                  ? "لم يتم العثور على معلمين."
                  : "No Teachers Found."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

// Exporting the ParentViewTeachers component to be used in other parts of the application
export default ParentViewTeachers;
