// Import necessary hooks and components from React
import React, { useEffect, useState } from "react";

// Import necessary components from React Bootstrap
import { Col, Form } from "react-bootstrap";

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
 * handleSubmit is a function to Handle form submission with payload validation, API request, and user redirection
 */
import { fetchData } from "../../Logic/fetchData";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Import constants from configuration fil
import {
  GET_METHOD,
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_GET_TEACHER_IDS,
} from "../../scripts/config";

// Import custom CSS for styling
import "./Add.css";

/**
 * Add component renders a form for adding a new item in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const Add = ({
  Config,
  inputsArraySets,
  inputsArrayRefs,
  selectsArraySets,
  selectsArrayRefs,
  payload,
}) => {
  // State variables for form data
  const [error, setError] = useState(""); // Stores error messages
  const [msg, setMsg] = useState(""); // Stores success messages
  const [teacherIDs, setTeacherIDs] = useState([]);

  // Get the language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Initialize form values based on refs
  useEffect(() => {
    if (Config.url_get === URL_GET_TEACHER_IDS) {
      fetchData(
        setTeacherIDs,
        setMsg,
        setError,
        GET_METHOD,
        Config.url_get,
        dataLanguage
      );
    }
    inputsArraySets.forEach((set, i) => set(inputsArrayRefs[i].current.value));
    selectsArraySets.forEach((set, i) =>
      set(selectsArrayRefs[i].current.value)
    );
  }, [
    inputsArraySets,
    inputsArrayRefs,
    selectsArrayRefs,
    selectsArraySets,
    dataLanguage,
    payload,
    Config,
  ]);

  // Reset success message after a delay
  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(""), MESSAGE_DELAY);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{Config.heading[dataLanguage]}</h3>

      {/* Form for adding a new student */}
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            Config.url_add,
            POST_METHOD,
            payload,
            Config.view_type,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {Config.FormLabel[dataLanguage]}
          </label>
          <p>
            {error ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

          {/* Input fields */}
          {Config.inputs.map((input, index) =>
            input.name === "confirmPass" ? (
              <input
                key={index}
                placeholder={input.placeholder[dataLanguage]}
                type={input.type}
                ref={inputsArrayRefs[index]}
                className="user-input mb-3 text-center mx-auto"
                name={input.name}
                value={payload[index]}
                onChange={(e) =>
                  handelInputChange(
                    e,
                    input.name,
                    setError,
                    inputsArraySets[index],
                    dataLanguage,
                    payload.password
                  )
                }
              />
            ) : (
              <input
                key={index}
                placeholder={input.placeholder[dataLanguage]}
                type={input.type}
                ref={inputsArrayRefs[index]}
                className="user-input mb-3 text-center mx-auto"
                name={input.name}
                value={payload[index]}
                onChange={(e) =>
                  handelInputChange(
                    e,
                    input.name,
                    setError,
                    inputsArraySets[index],
                    dataLanguage
                  )
                }
              />
            )
          )}

          {/* Dropdown selection */}
          {Config.selects.map((select, index) =>
            Config.url_get === URL_GET_TEACHER_IDS ? (
              <Form.Select
                key={index}
                name={select.name}
                onChange={(e) => handleSelectChange(e, selectsArraySets[index])}
                ref={selectsArrayRefs[index]}
                className="mb-3"
              >
                <optgroup label={select.heading[dataLanguage]}>
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
            ) : (
              <Form.Select
                key={index}
                name={select.name}
                onChange={(e) => handleSelectChange(e, selectsArraySets[index])}
                ref={selectsArrayRefs[index]}
                className="mb-3"
              >
                <optgroup label={select.heading[dataLanguage]}>
                  {select.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.name[dataLanguage]}
                    </option>
                  ))}
                </optgroup>
              </Form.Select>
            )
          )}

          {/* Submit button */}
          <button className="btn-login mx-auto">
            {Config.button[dataLanguage]}
          </button>
        </Col>

        {/* Toast container for success/error messages */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

export default Add;
