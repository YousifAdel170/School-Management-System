// Import necessary constants and utilities from the config file
import {
  GET_METHOD,
  TOASTIFY_ERROR,
  TOASTIFY_FAILED_DELETED,
  TOASTIFY_SUCCESS,
  TOASTIFY_SUCCESS_DELETED,
} from "../scripts/config";

// Function to fetch updated data
import { fetchData } from "./fetchData";

// Library for displaying toast notifications
import { toast } from "react-toastify";

/**
 * Handle the deletion of a specific item and update the UI accordingly.
 *
 * @param {Object} e - The event object triggered by the delete action.
 * @param {string} ID - The ID of the item to be deleted.
 * @param {string} type - The type of item being deleted.
 * @param {string} DELETED_URL - The URL endpoint to send the delete request.
 * @param {Function} setData - Function to update the state with fetched data after deletion.
 * @param {Function} setMsg - Function to update the message state.
 * @param {Function} setError - Function to handle and update error state.
 * @param {string} METHOD - The HTTP method for the delete request.
 * @param {string} VIEW_URL - The URL endpoint for fetching the updated data after deletion.
 * @param {string} dataLanguage - The language preference for messages and notifications
 */
export const handleDelete = async (
  e,
  ID,
  type,
  DELETED_URL,
  setData,
  setMsg,
  setError,
  METHOD,
  VIEW_URL,
  dataLanguage
) => {
  // Utility function to display toast notifications
  const notify = (message, type) => {
    // Show error notification
    if (type === "Error") toast.error(message);
    // Show success notification
    else if (type === "Success") toast.success(message);
  };

  // Prevent the default behavior of the event.
  e.preventDefault();

  // Log the type of item being deleted and its ID
  console.log(`Deleting ${type} with ID:`, ID);
  try {
    // Define the delete request URL
    const url = DELETED_URL;

    // Send the delete request to the server
    const response = await fetch(url, {
      // Use the specified HTTP method
      method: METHOD,
    });

    // Parse the JSON response
    const data = await response.json();

    // Check if the delete operation was successful
    if (data.success) {
      console.log(data.message); // Log the success message
      notify(TOASTIFY_SUCCESS_DELETED, TOASTIFY_SUCCESS); // Show success notification

      // Fetch updated data and update the UI
      fetchData(setData, setMsg, setError, GET_METHOD, VIEW_URL, dataLanguage);
    } else {
      // Show an error notification and log the error message
      notify(TOASTIFY_FAILED_DELETED, TOASTIFY_ERROR);
      console.error(`Error deleting ${type}:`, data.message); // Log the error message from server
    }
  } catch (error) {
    // Handle network or unexpected errors
    notify(TOASTIFY_FAILED_DELETED, TOASTIFY_ERROR); // Show error notification
    console.error("Error during delete operation:", error); // Log the error details
  }
};
