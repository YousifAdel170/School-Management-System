import {
  GET_METHOD,
  TOASTIFY_ERROR,
  TOASTIFY_FAILED_DELETED,
  TOASTIFY_SUCCESS,
  TOASTIFY_SUCCESS_DELETED,
} from "../scripts/config";
import { fetchData } from "./fetchData";
import { toast } from "react-toastify";

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
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  e.preventDefault();
  console.log(`Deleting ${type} with ID:`, ID);
  try {
    const url = DELETED_URL;

    const response = await fetch(url, {
      method: METHOD,
    });
    const data = await response.json();
    if (data.success) {
      console.log(data.message);
      notify(TOASTIFY_SUCCESS_DELETED, TOASTIFY_SUCCESS);
      fetchData(setData, setMsg, setError, GET_METHOD, VIEW_URL, dataLanguage);
    } else {
      notify(TOASTIFY_FAILED_DELETED, TOASTIFY_ERROR);
      console.error(`Error deleting ${type}:`, data.message); // Log the error message from server
    }
  } catch (error) {
    notify(TOASTIFY_FAILED_DELETED, TOASTIFY_ERROR);
    console.error("Error during delete operation:", error); // Log any network or other errors
  }
};
