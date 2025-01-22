// handling the change of the selection options
export const handleSelectChange = (e, setSelect) => {
  setSelect(e.target.value);
};

// Handle Entering Data
export const handelInputChange = (
  e,
  type,
  setError,
  setData,
  dataLanguage,
  password
) => {
  setError("");
  setData(e.target.value);
  switch (type) {
    case "name":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "الاسم كامل مفقود"
            : "Full Name has left blank"
        );
      break;

    case "username":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "اسم المستخدم فارغ"
            : "Username has left blank"
        );
      break;

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

    case "BOD":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "تاريخ الميلاد فارغ"
            : "Birthdate has left blank"
        );
      break;

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

    case "address":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar" ? "العنوان مفقود" : "Address has left blank"
        );
      break;

    case "subjectName":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "اسم المادة فارغ"
            : "Subject Name has left blank"
        );
      break;
    case "subjectCode":
      if (e.target.value === "")
        setError(
          dataLanguage === "ar"
            ? "رمز المادة فارغ"
            : "Subject Code has left blank"
        );
      break;
    default:
  }
};
