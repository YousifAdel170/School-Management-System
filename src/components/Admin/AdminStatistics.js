// Importing necessary libraries and components
import React, { useEffect, useState } from "react";

// Importing Table component from Bootstrap for responsive tables
import { Table } from "react-bootstrap";

// Importing Redux hook to access global state
import { useSelector } from "react-redux";

import { fetchData } from "../../Logic/fetchData"; // Custom function to fetch data from an API

// Importing config values (constants)
import {
  MESSAGE_DELAY,
  POST_METHOD,
  URL_GET_STATISTICS,
} from "../../scripts/config";

/**
 * AdminStatistics component renders a table with various statistics such as the total number of students,
 * total subjects, and average students per subject. It fetches data from the server and displays it accordingly.
 */
const AdminStatistics = () => {
  // State variables to store statistics data and counters
  const [statsData, setStatsData] = useState([]); // State to store the fetched statistics data
  const [studentCounter, setStudentCounter] = useState(0); // State to store the total student count
  const [subjectCounter, setSubjectCounter] = useState(0); // State to store the total subject count
  const [averageStdPerSubject, setAverageStdPerSubject] = useState(0); // State to store average students per subject
  const [error, setError] = useState(""); // Error message state
  const [msg, setMsg] = useState(""); // Success message state

  // Redux selector to get the current language
  const dataLanguage = useSelector((state) => state.language);

  /**
   * useEffect hook to fetch statistics data whenever the language changes.
   * It calls the fetchData function to retrieve data from the server.
   */
  useEffect(() => {
    // Fetch statistics data using the fetchData function
    fetchData(
      setStatsData, // Function to set fetched data
      setMsg, // Function to set success message
      setError, // Function to set error message
      POST_METHOD, // HTTP method (POST)
      URL_GET_STATISTICS, // API endpoint to get statistics data
      dataLanguage // Language (for localization)
    );
  }, [dataLanguage]); // Effect runs when dataLanguage changes

  /**
   * useEffect hook to update the state variables (studentCounter, subjectCounter, and averageStdPerSubject)
   * when the fetched stats data is available.
   */
  useEffect(() => {
    if (statsData.length) {
      // Set the respective counters from the fetched data
      setStudentCounter(statsData[0].std_counter); // Set the total number of students
      setSubjectCounter(statsData[1].subject_counter); // Set the total number of subjects
      setAverageStdPerSubject(statsData[2].average); // Set the average number of students per subject
    }
  }, [statsData]); // Effect runs when statsData changes

  /**
   * useEffect hook to clear the success message after a specified delay.
   */
  useEffect(() => {
    // Set a timeout to clear the success message after MESSAGE_DELAY milliseconds
    setTimeout(() => {
      setMsg(""); // Clear the message
    }, MESSAGE_DELAY);
  }, [msg]); // Effect runs when the success message (msg) changes

  return (
    <div className="table">
      {/* Table title, dynamically rendered based on the selected language */}
      <h3>{dataLanguage === "ar" ? "جدول الإحصائيات" : "Stats Table"}</h3>

      {/* Displaying error or success messages */}
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>

      {/* Statistics table */}
      <Table striped bordered hover className="text-center">
        <thead>
          {/* Table headers dynamically rendered based on the selected language */}
          <tr>
            <th>
              {dataLanguage === "ar" ? "إجمالي الطلاب" : "Total Students"}
            </th>
            <th>
              {dataLanguage === "ar" ? "إجمالي المواد" : "Total Subjects"}
            </th>
            <th>
              {dataLanguage === "ar"
                ? "متوسط الطلاب لكل مادة"
                : "Average Students Per Subject"}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table row displaying the fetched statistics */}
          <tr>
            <td>{studentCounter}</td>
            <td>{subjectCounter}</td>
            <td>{averageStdPerSubject}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

// Exporting the AdminStatistics component to be used in other parts of the application
export default AdminStatistics;
