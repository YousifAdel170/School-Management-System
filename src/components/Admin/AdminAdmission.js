// Importing necessary libraries and components
import React, { useEffect, useState } from "react";

// Importing Table component from Bootstrap for responsive tables
import { Table } from "react-bootstrap";

// Importing Redux hook to access global state
import { useSelector } from "react-redux";

/**
 * Import Custom Functions
 * fetchData is a custom function to fetch data from an API
 * getRoleNameFromID is a custom function to map role IDs to role names
 */
import { fetchData } from "../../Logic/fetchData";
import { getRoleNameFromID } from "../../Logic/getRoleNameFromID";

// Importing config values (constants)
import {
  admissionHeadings,
  MESSAGE_DELAY,
  POST_METHOD,
  URL_GET_ADMISSION,
} from "../../scripts/config";

// Importing custom CSS for styling
import "./AdminAdmission.css";

/**
 * AdminAdmission component renders a table with admission data retrieved from the server.
 * It displays error/success messages and automatically updates based on language selection.
 */
const AdminAdmission = () => {
  // State variables to store error message, success message, and admission data
  const [error, setError] = useState(""); // Error message state
  const [msg, setMsg] = useState(""); // Success message state
  const [admissionData, setAdmissionData] = useState([]); // State t

  // Redux selector to get the current language (used for localization)
  const dataLanguage = useSelector((state) => state.language);

  /**
   * useEffect hook to fetch admission data whenever the language changes.
   * It calls the fetchData function to retrieve data from the server.
   */
  useEffect(() => {
    fetchData(
      setAdmissionData, // Function to set fetched data
      setMsg, // Function to set success message
      setError, // Function to set error message
      POST_METHOD, // HTTP method (POST)
      URL_GET_ADMISSION, // API endpoint to get admission data
      dataLanguage // Language (for localization)
    );
  }, [dataLanguage]); // Effect runs when dataLanguage changes

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
      <h3>{dataLanguage === "ar" ? "جدول القبول" : "Admission Table"}</h3>

      {/* Displaying error or success messages */}
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>

      {/* Admission table */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {/* Loop through admissionHeadings to display table headers */}
            {admissionHeadings.length
              ? admissionHeadings.map((heading, index) => (
                  <th key={index}>
                    {/* Dynamic table header based on language */}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
          </tr>
        </thead>

        <tbody>
          {/* Loop through admissionData to display the rows */}
          {admissionData.length
            ? admissionData.map((admission, index) => (
                <tr key={index}>
                  <td>{admission.ID}</td>
                  <td>{admission.username}</td>
                  <td>{admission.email}</td>
                  <td>{admission.password}</td>
                  <td>{admission.roleID}</td>
                  <td>{getRoleNameFromID(admission.roleID)}</td>
                  <td>{admission.status}</td>
                  <td>{admission.created_at}</td>
                  <td>{admission.updated_at}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

// Exporting the AdminAdmission component to be used in other parts of the application
export default AdminAdmission;
