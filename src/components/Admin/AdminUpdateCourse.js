import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminAddStudent.css";
import { useSelector } from "react-redux";
import { MESSAGE_DELAY, REDIRECTING_DELAY } from "../../scripts/config";

const AdminUpdateCourse = () => {
  const { id } = useParams();

  const dataLanguage = useSelector((state) => state.language);

  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [teachingstaffID, setTeachingstaffID] = useState("");
  const [updatedID, setUpdatedID] = useState(null);

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [teacherIDs, setTeacherIDs] = useState([]);
  const navigate = useNavigate();

  // Refs for input Fields
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  useEffect(() => {
    const fetchTeacherIDsData = async () => {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/addCourse/view_teachers.php";

        const response = await fetch(url, {
          method: "GET",
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

        setTeacherIDs(data.teacherIDs);
        if (data.success) {
          // console.log(data.teacherIDs);
          setMsg(data.message);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(
          dataLanguage === "ar"
            ? "حدث خطأ. حاول مرة أخرى."
            : "Something went wrong. Please try again."
        );
      }
    };

    fetchTeacherIDsData();
    setUpdatedID(id);
    setSubjectName(subjectNameRef.current.value);
    setSubjectCode(subjectCodeRef.current.value);
    setTeachingstaffID(teachingstaffIDRef.current.value);
  }, [id, dataLanguage]);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  // Handle Entering Data
  const handelInputChange = (e, type) => {
    switch (type) {
      case "subjectName":
        setError("");
        setSubjectName(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "اسم المادة فارغ"
              : "Subject Name has left blank"
          );
        break;
      case "subjectCode":
        setError("");
        setSubjectCode(e.target.value);
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

  const handleTeachingStaffIDChange = (e) => {
    setTeachingstaffID(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if email and password are not empty
    if (subjectName && subjectCode && teachingstaffID) {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/update_subject.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            updatedID,
            subjectName,
            subjectCode,
            teachingstaffID,
          }),
        });

        const responseText = await response.text();
        console.log("Raw Response:", responseText);

        // Parse JSON safely
        try {
          const data = JSON.parse(responseText);
          console.log(data);
          if (data.success) {
            setMsg(
              dataLanguage === "ar"
                ? "تم تحديث المادة بنجاح! جارٍ التحويل..."
                : "Subject Has Been Updated Successfully! Redirecting..."
            );
            setTimeout(
              () => navigate("/supervisor/view_courses"),
              REDIRECTING_DELAY
            );
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error("Failed to parse JSON:", responseText);
        }
      } catch (error) {}
    } else {
      setError(
        dataLanguage === "ar"
          ? "جميع الحقول مطلوبة."
          : "All fields are required."
      );
    }
  };

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{dataLanguage === "ar" ? "تحديث المادة" : "Update Subject"}</h3>
      <form
        onSubmit={handleSubmit}
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "تحديث المادة" : "Update The Subject"}
          </label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
          <input
            placeholder={dataLanguage === "ar" ? "اسم المادة" : "Subject Name"}
            type="text"
            ref={subjectNameRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectName"
            value={subjectName}
            onChange={(e) => handelInputChange(e, "subjectName")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "رمز المادة" : "Subject Code"}
            type="text"
            ref={subjectCodeRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectCode"
            value={subjectCode}
            onChange={(e) => handelInputChange(e, "subjectCode")}
          />

          <Form.Select
            name="teachingstaffID"
            onChange={handleTeachingStaffIDChange}
            ref={teachingstaffIDRef}
            value={teachingstaffID}
            className="mb-3"
          >
            <optgroup
              label={
                dataLanguage === "ar"
                  ? "اختر اسم المعلم"
                  : "Select Teaching Staff Name"
              }
            >
              {teacherIDs.length
                ? teacherIDs.map((teacherID, index) => (
                    <option key={index} value={`${teacherID.ID}`}>
                      {teacherID.name}
                    </option>
                  ))
                : null}
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-3">
            {" "}
            {dataLanguage === "ar" ? "تحديث المادة" : "Update Course"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminUpdateCourse;
