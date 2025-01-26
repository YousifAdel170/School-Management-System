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
    // Validate name field
    case "name":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "الاسم كامل مفقود"
            : "Full Name has left blank"
        );
      break;

    // Validate username field
    case "username":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "اسم المستخدم فارغ"
            : "Username has left blank"
        );
      break;

    // Validate email field
    case "email":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "البريد الإلكتروني فارغ"
            : "Email has left blank"
        );
      else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e.target.value)
      ) {
        setError(
          dataLanguage === "ar"
            ? "البريد الإلكتروني غير صالح، يرجى التأكد من تنسيقه بشكل صحيح"
            : "Invalid email format, please make sure it is properly formatted"
        );
      }
      break;

    // Validate password field
    case "password":
      const testPass = e.target.value;
      if (testPass === "") {
        setError(
          dataLanguage === "ar"
            ? "كلمة المرور فارغة"
            : "Password has left blank"
        );
      } else if (testPass.length < 8) {
        setError(
          dataLanguage === "ar"
            ? "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل"
            : "Password must be at least 8 characters long"
        );
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(testPass)) {
        setError(
          dataLanguage === "ar"
            ? "كلمة المرور يجب أن تحتوي على حرف خاص واحد على الأقل"
            : "Password must contain at least one special character"
        );
      }
      break;

    // Validate confirmation password
    case "confirmPass":
      //   console.log(password);
      //   console.log(e.target.value);
      if (e.target.value === "") {
        setError(
          dataLanguage === "ar"
            ? "تأكيد كلمة المرور مفقود"
            : "Confirmation Password has left blank"
        );
      } else if (!password) {
        setError(
          dataLanguage === "ar"
            ? "أدخل كلمة المرور أولاً"
            : "Please enter the Password first"
        );
      } else if (e.target.value !== password) {
        setError(
          dataLanguage === "ar"
            ? "تأكيد كلمة المرور لا يتطابق مع كلمة المرور"
            : "Confirmation Password doesn't match with the Password"
        );
      }
      break;

    // Validate birthdate field
    case "BOD":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "تاريخ الميلاد فارغ"
            : "Birthdate has left blank"
        );
      break;

    // Validate salary field
    case "salary":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar" ? "الراتب مفقود" : "Salary has left blank"
        );
      else if (e.target.value < 0)
        setError(
          dataLanguage === "ar"
            ? "الراتب لا يمكن أن يكون سالباً"
            : "Salary Can't Be Negative"
        );
      else if (e.target.value < 1000)
        setError(
          dataLanguage === "ar"
            ? "الراتب لا يمكن أن يكون أقل من 1000"
            : "Salary Can't Be Less Than 1000"
        );
      break;

    // Validate address field
    case "address":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar" ? "العنوان مفقود" : "Address has left blank"
        );
      break;

    // Validate subject name field
    case "subjectName":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "اسم المادة فارغ"
            : "Subject Name has left blank"
        );
      break;

    // Validate subject code field
    case "subjectCode":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "رمز المادة فارغ"
            : "Subject Code has left blank"
        );
      break;

    // Handle unexpected input types (do nothing)
    default:
  }
};
