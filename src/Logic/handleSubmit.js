// Import necessary constants and utilities
import {
  REDIRECTING_DELAY,
  TOASTIFY_NOTIFICATIONS,
  TYPE_AUT_REGISTER,
  TYPE_AUTH_LOGIN,
} from "../scripts/config";

// Library for displaying toast notifications
import { toast } from "react-toastify";

/**
 * Handles form submission with payload validation, API request, and user redirection.
 *
 * @param {Object} e - The event object triggered by the form submission.
 * @param {Function} setMsg - Function to set success or information messages.
 * @param {Function} setError - Function to set error messages.
 * @param {string} dataLanguage - Language preference for messages.
 * @param {Function} navigate - Function for route navigation.
 * @param {string} URL - The API endpoint to send the request to.
 * @param {string} METHOD - The HTTP method for the API request (e.g., "POST", "PUT").
 * @param {Object} payload - The data to be sent in the request body.
 * @param {string} type - The type of operation being performed.
 * @param {string} role - The user role for redirection.
 */
export const handleSubmit = async (
  e,
  setMsg,
  setError,
  dataLanguage,
  navigate,
  URL,
  METHOD,
  payload,
  type,
  role
) => {
  /**
   * Display a notification based on message type.
   *
   * @param {string} message - The notification message.
   * @param {string} type - The type of notification ("Error" or "Success").
   */
  const notify = (message, type) => {
    if (type === TOASTIFY_NOTIFICATIONS.error) toast.error(message);
    else if (type === TOASTIFY_NOTIFICATIONS.success) toast.success(message);
  };

  // Prevent default form submission behavior
  e.preventDefault();

  // Validate that all fields in the payload are filled
  const areFieldsValid = Object.values(payload).every((field) => field !== "");
  if (areFieldsValid) {
    try {
      // API request configuration
      const url = URL;

      // Make the API request with the specified method, headers, and payload
      const response = await fetch(url, {
        method: METHOD,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Capture and log the raw response text
      const responseText = await response.text();
      console.log("Raw Response:", responseText);

      // Parse the raw response text into JSON
      try {
        const data = JSON.parse(responseText);
        console.log(data);
        // Handle successful responses based on the operation type
        if (data.success) {
          if (type === TYPE_AUTH_LOGIN) {
            // Save user role and type in localStorage
            localStorage.setItem("roleID", data.roleID);
            if (data.ID === "1") localStorage.setItem("userType", "supervisor");
            else localStorage.setItem("userType", "teacher");

            // Notify the user and set success message
            notify(
              TOASTIFY_NOTIFICATIONS.loginSuccess[dataLanguage],
              TOASTIFY_NOTIFICATIONS.success
            );
            setMsg(
              dataLanguage === "ar"
                ? "تم تسجيل الدخول بنجاح! جاري التوجيه..."
                : "Logged in successfully! Redirecting..."
            );

            // Redirect the user based on their role
            setTimeout(() => {
              switch (data.roleID) {
                case "1":
                  navigate("/student");
                  break;
                case "2":
                  if (data.ID === "1") navigate("/supervisor");
                  else navigate("/teacher");
                  break;
                case "3":
                  navigate("/parent");
                  break;
                default:
              }
            }, 3000);
          } else if (type === TYPE_AUT_REGISTER) {
            setMsg(
              dataLanguage === "ar"
                ? "تم التسجيل بنجاح! إعادة التوجيه..."
                : "Registration successful! Redirecting..."
            );
            // Notify the user about successful registration
            notify(
              TOASTIFY_NOTIFICATIONS.registrationSuccess[dataLanguage],
              TOASTIFY_NOTIFICATIONS.success
            );

            // Redirect to the login page after a delay
            setTimeout(() => navigate("/login"), 3000);
          } else {
            // Notify for other successful operations
            notify(
              TOASTIFY_NOTIFICATIONS.operationSuccess[dataLanguage],
              TOASTIFY_NOTIFICATIONS.success
            );
            setMsg(
              dataLanguage === "ar"
                ? `تمت العملية بنجاح! سيتم إعادة التوجيه...`
                : data.message
            );

            // Redirect to a specific page based on role and type
            setTimeout(() => navigate(`/${role}/${type}`), REDIRECTING_DELAY);
          }
        } else {
          // Handle API errors returned in the response
          setError(data.message);
        }
      } catch (error) {
        // Log error if JSON parsing fails
        console.error("Failed to parse JSON:", responseText);
      }
    } catch (error) {
      // Handle fetch operation errors
      console.error("There was an error with the fetch operation:", error);
      setError(
        dataLanguage === "ar"
          ? "حدث خطأ أثناء إرسال الطلب."
          : "An error occurred while submitting the request."
      );
      notify(
        TOASTIFY_NOTIFICATIONS.requestError[dataLanguage],
        TOASTIFY_NOTIFICATIONS.error
      );
    }
  } else {
    // Handle missing fields in the payload
    setError(
      dataLanguage === "ar" ? "جميع الحقول مطلوبة." : "All fields are required."
    );
    notify(
      TOASTIFY_NOTIFICATIONS.missingFields[dataLanguage],
      TOASTIFY_NOTIFICATIONS.error
    );
  }
};
