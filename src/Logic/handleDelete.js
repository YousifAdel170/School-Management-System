import { GET_METHOD } from "../scripts/config";
import { fetchData } from "./fetchData";

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
      fetchData(setData, setMsg, setError, GET_METHOD, VIEW_URL, dataLanguage);
    } else {
      console.error(`Error deleting ${type}:`, data.message); // Log the error message from server
    }
  } catch (error) {
    console.error("Error during delete operation:", error); // Log any network or other errors
  }
};
