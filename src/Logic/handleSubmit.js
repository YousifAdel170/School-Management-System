import {
  REDIRECTING_DELAY,
  TYPE_AUT_REGISTER,
  TYPE_AUTH_LOGIN,
} from "../scripts/config";

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
  // Prevent the default form submission behavior
  e.preventDefault();

  // Check if all required fields in the payload are provided
  const areFieldsValid = Object.values(payload).every((field) => field !== "");
  if (areFieldsValid) {
    try {
      const url = URL;

      // Make the fetch request
      const response = await fetch(url, {
        method: METHOD,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log("Raw Response:", responseText);

      // Parse JSON safely
      try {
        const data = JSON.parse(responseText);
        console.log(data);
        if (data.success) {
          if (type === TYPE_AUTH_LOGIN) {
            localStorage.setItem("roleID", data.roleID);
            if (data.ID === "1") localStorage.setItem("userType", "supervisor");
            else localStorage.setItem("userType", "teacher");
            setMsg(
              dataLanguage === "ar"
                ? "تم تسجيل الدخول بنجاح! جاري التوجيه..."
                : "Logged in successfully! Redirecting..."
            );
            // Redirect after a delay
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
            setTimeout(() => navigate("/login"), 3000);
          } else {
            setMsg(
              dataLanguage === "ar"
                ? `تمت العملية بنجاح! سيتم إعادة التوجيه...`
                : data.message
            );
            setTimeout(() => navigate(`/${role}/${type}`), REDIRECTING_DELAY);
          }
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("Failed to parse JSON:", responseText);
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
      setError(
        dataLanguage === "ar"
          ? "حدث خطأ أثناء إرسال الطلب."
          : "An error occurred while submitting the request."
      );
    }
  } else {
    setError(
      dataLanguage === "ar" ? "جميع الحقول مطلوبة." : "All fields are required."
    );
  }
};
