import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminAddStudent.css";
import { useSelector } from "react-redux";
import {
  GET_METHOD,
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_ADD_SUBJECT,
  URL_GET_TEACHER_IDS,
  VIEW_SUBJECT_TYPE,
} from "../../scripts/config";
import { fetchData } from "../../Logic/fetchData";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

const AdminAddCourse = () => {
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [teachingstaffID, setTeachingstaffID] = useState("");

  const payloadSubjects = { subjectName, subjectCode, teachingstaffID };

  const dataLanguage = useSelector((state) => state.language);

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [teacherIDs, setTeacherIDs] = useState([]);
  const navigate = useNavigate();

  // Refs for input Fields
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  useEffect(() => {
    fetchData(
      setTeacherIDs,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER_IDS,
      dataLanguage
    );
    setSubjectName(subjectNameRef.current.value);
    setSubjectCode(subjectCodeRef.current.value);
    setTeachingstaffID(teachingstaffIDRef.current.value);
  }, [dataLanguage]);

  // Clear the message after specific time
  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{dataLanguage === "ar" ? "إضافة مادة" : "Add Subject"}</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_ADD_SUBJECT,
            POST_METHOD,
            payloadSubjects,
            VIEW_SUBJECT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "إضافة مادة جديدة" : "Add a New Subject"}
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
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectName",
                setError,
                setSubjectName,
                dataLanguage
              )
            }
          />
          <input
            placeholder={dataLanguage === "ar" ? "رمز المادة" : "Subject Code"}
            type="text"
            ref={subjectCodeRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectCode"
            value={subjectCode}
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectCode",
                setError,
                setSubjectCode,
                dataLanguage
              )
            }
          />

          <Form.Select
            name="teachingstaffID"
            onChange={(e) => handleSelectChange(e, setTeachingstaffID)}
            ref={teachingstaffIDRef}
            value={teachingstaffID}
            className="mb-3"
          >
            <optgroup
              label={
                dataLanguage === "ar"
                  ? "اختيار اسم المعلم"
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
            {dataLanguage === "ar" ? "إضافة المادة" : "Add Course"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminAddCourse;
