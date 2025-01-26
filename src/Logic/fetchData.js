/**
 * Fetch data from a given API endpoint and handle responses.
 *
 * @param {Function} setData - Function to set the fetched data.
 * @param {Function} setMsg - Function to set the success message.
 * @param {Function} setError - Function to set the error message.
 * @param {string} METHOD - The HTTP method (e.g., GET, POST).
 * @param {string} URL - The endpoint URL for the API request.
 * @param {string} dataLanguage - The language preference for messages (e.g., "ar" for Arabic).
 */
export const fetchData = async (
  setData,
  setMsg,
  setError,
  METHOD,
  URL,
  dataLanguage
) => {
  try {
    // Construct the API URL
    const url = URL;

    // Make the API request with the specified method and headers
    const response = await fetch(url, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response status is not OK (e.g., 404, 500)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    //   console.log(response);

    // Parse the JSON response from the API
    const data = await response.json();
    //   console.log(data);

    // Update the state with the fetched data
    setData(data.Data);

    // Check if the operation was successful
    if (data.success) {
      // Set the success message based on the selected language (Arabic/English)
      setMsg(
        dataLanguage === "ar"
          ? `تمت العملية بنجاح! سيتم إعادة التوجيه...`
          : data.message
      );
    } else {
      // Set the error message if the operation failed
      setError(data.message);
    }
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("There was a problem with the fetch operation:", error);
    setError("Something went wrong. Please try again.");
  }
};
