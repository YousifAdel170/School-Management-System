// Importing necessary libraries and components
import React, { useEffect, useState } from "react";

// Importing Table component from Bootstrap for responsive tables
import { Table } from "react-bootstrap";

// Importing Redux hook to access global state
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

// Importing config values (constants)
import { GET_METHOD, MESSAGE_DELAY, SUBJECT_TYPE } from "../../scripts/config";

// Importing custom CSS for styling
import "./View.css";

/**
 * View component renders a table with admission data retrieved from the server.
 * It displays error/success messages and automatically updates based on language selection.
 */
const View = ({
  data,
  setData,
  url,
  object,
  headings,
  getRoleNameFromID,
  admin_delete,
  admin_update,
  navigate,
  type,
  update_type,
  deleted_url,
  toast,
}) => {
  // State variables to store data
  const [error, setError] = useState(""); // Error message state
  const [msg, setMsg] = useState(""); // Success message state

  // Redux selector to get the current language
  const dataLanguage = useSelector((state) => state.language);

  /**
   * useEffect hook to fetch admission data whenever the language changes.
   * It calls the fetchData function to retrieve data from the server.
   */
  useEffect(() => {
    fetchData(
      setData, // Function to set fetched data
      setMsg, // Function to set success message
      setError, // Function to set error message
      GET_METHOD, // HTTP method (POST)
      url, // API endpoint to get admission data
      dataLanguage // Language (for localization)
    );
  }, [setData, setError, setMsg, url, dataLanguage]);

  /**
   * useEffect hook to clear the success message after a specified delay.
   */
  useEffect(() => {
    setTimeout(() => {
      setMsg(""); // Clear the message
    }, MESSAGE_DELAY);
  }, [setMsg]); // Effect runs when the success message (msg) changes

  return (
    <div className="table">
      {/* Table title, dynamically rendered based on the selected language */}
      <h3>{dataLanguage === "ar" ? object.heading.ar : object.heading.en}</h3>

      {/* Displaying error or success messages */}
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>

      {/* Table */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {/* Loop through admissionHeadings to display table headers */}
            {headings.length
              ? headings.map((heading, index) => (
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
          {data.length ? (
            data.map((item, index) => (
              <tr key={index}>
                {object.rows.map((row, index) => (
                  <td key={index}>{item[row]}</td>
                ))}
                {getRoleNameFromID ? (
                  <td>{getRoleNameFromID(item.roleID)}</td>
                ) : null}
                {admin_update ? (
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) =>
                        handleNavigateUpdate(
                          e,
                          navigate,
                          update_type,
                          type === SUBJECT_TYPE ? item.id : item.user_id
                        )
                      }
                    >
                      {dataLanguage === "ar" ? "تحديث" : "Update"}
                    </button>
                  </td>
                ) : null}
                {admin_delete ? (
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) =>
                        handleDelete(
                          e,
                          item.ID,
                          type,
                          type === SUBJECT_TYPE
                            ? `${deleted_url}${item.ID}`
                            : `${deleted_url}${item.user_id}`,
                          setData,
                          setMsg,
                          setError,
                          GET_METHOD,
                          url,
                          dataLanguage
                        )
                      }
                    >
                      {dataLanguage === "ar" ? "حذف" : "Delete"}
                    </button>
                  </td>
                ) : null}
              </tr>
            ))
          ) : (
            <tr>
              {type ? (
                <td colSpan={headings.length} className="text-center">
                  No {type} found.
                </td>
              ) : (
                <td>No Data Found</td>
              )}
            </tr>
          )}
        </tbody>
      </Table>
      {/* Toast container to show success/error messages */}
      {toast ? <ToastContainer style={{ marginTop: "80px" }} /> : null}
    </div>
  );
};

// Exporting the AdminAdmission component to be used in other parts of the application
export default View;
