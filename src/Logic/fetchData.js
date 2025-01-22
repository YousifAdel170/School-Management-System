export const fetchData = async (
  setData,
  setMsg,
  setError,
  METHOD,
  URL,
  dataLanguage
) => {
  try {
    const url = URL;

    const response = await fetch(url, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Check if the response is not OK
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    //   console.log(response);
    // Parse JSON response
    const data = await response.json();

    //   console.log(data);

    setData(data.Data);
    if (data.success) {
      setMsg(
        dataLanguage === "ar"
          ? `تمت العملية بنجاح! سيتم إعادة التوجيه...`
          : data.message
      );
    } else {
      setError(data.message);
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    setError("Something went wrong. Please try again.");
  }
};
