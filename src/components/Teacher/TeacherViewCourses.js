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
  addSubjectsHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  URL_GET_SUBJECTS,
} from "../../scripts/config";

// Import custom CSS for styling
import "../Admin/AdminAdmission.css";

/**
 * TeacherViewCourses component displays a table of subjects and allows the admin to update or delete subject details.
 * The subjects are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const TeacherViewCourses = () => {
  // State variables for form data
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);

  // Get the language from Redux store
  const dataLanguage = useSelector((state) => state.language);

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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={addSubjectsHeadings.length} className="text-center">
                {dataLanguage === "ar"
                  ? "لم يتم العثور على مواد."
                  : "No students found."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

// Exporting the TeacherViewCourses component to be used in other parts of the application
export default TeacherViewCourses;
