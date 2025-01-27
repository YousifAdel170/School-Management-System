import { ERROR_MESSAGES } from "../scripts/config";

/**
 * Handle the change of the selection options in a dropdown.
 *
 * @param {Object} e - The event object from the select input.
 * @param {Function} setSelect - Function to update the selected value.
 */
export const handleSelectChange = (e, setSelect) => {
  // Update the selected value with the user's selection
  setSelect(e.target.value);
};

/**
 * Handle input changes and validate based on the type of input.
 *
 * @param {Object} e - The event object from the input field.
 * @param {string} type - The type of input (e.g., "name", "email", "password").
 * @param {Function} setError - Function to set error messages.
 * @param {Function} setData - Function to set the input data value.
 * @param {string} dataLanguage - The language preference for error messages (e.g., "ar" for Arabic).
 * @param {string} [password] - The password value for comparison in case of "confirmPass".
 */
export const handelInputChange = (
  e,
  type,
  setError,
  setData,
  dataLanguage,
  password
) => {
  // Clear previous error messages
  setError("");

  // Update the state with the current input value
  setData(e.target.value);
  switch (type) {
    // Validate name field || username field || address field || birthdate field || subject name || subject code
    case "name":
    case "username":
    case "address":
    case "BOD":
    case "subjectName":
    case "subjectCode":
      if (e.target.value === "") setError(ERROR_MESSAGES[dataLanguage][type]);
      break;

    // Validate email field
    case "email":
      if (e.target.value === "") setError(ERROR_MESSAGES[dataLanguage][type]);
      else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e.target.value)
      )
        setError(ERROR_MESSAGES[dataLanguage]["invalidEmail"]);
      break;

    // Validate password field
    case "password":
      const testPass = e.target.value;
      if (e.target.value === "") setError(ERROR_MESSAGES[dataLanguage][type]);
      else if (testPass.length < 8)
        setError(ERROR_MESSAGES[dataLanguage]["shortPassword"]);
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(testPass))
        setError(ERROR_MESSAGES[dataLanguage]["specialCharPassword"]);
      break;

    // Validate confirmation password
    case "confirmPass":
      if (e.target.value === "") setError(ERROR_MESSAGES[dataLanguage][type]);
      else if (!password)
        setError(ERROR_MESSAGES[dataLanguage]["passwordFirst"]);
      else if (e.target.value !== password)
        setError(ERROR_MESSAGES[dataLanguage]["passwordMismatch"]);
      break;

    // Validate salary field
    case "salary":
      if (e.target.value === "") setError(ERROR_MESSAGES[dataLanguage][type]);
      else if (e.target.value < 0)
        setError(ERROR_MESSAGES[dataLanguage]["negativeSalary"]);
      else if (e.target.value < 1000)
        setError(ERROR_MESSAGES[dataLanguage]["lowSalary"]);
      break;

    // Handle unexpected input types (do nothing)
    default:
  }
};
