import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  addStudentHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  STUDENT_TYPE,
  UPDATE_STUDENT_TYPE,
  URL_DELELE_STUDENT,
  URL_GET_STUDENTS,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";
import { handleDelete } from "../../Logic/handleDelete";
import { handleNavigateUpdate } from "../../Logic/handleNavigateUpdate";

const AdminViewStudents = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [studentsData, setStudentsData] = useState([]);

  const dataLanguage = useSelector((state) => state.language);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData(
      setStudentsData,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_STUDENTS,
      dataLanguage
    );
  }, [dataLanguage]);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div className="table">
      <h3>Students Table</h3>
      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {addStudentHeadings.length
              ? addStudentHeadings.map((heading, index) => (
                  <th key={index}>
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
            {addStudentHeadings.length ? (
              <>
                <th>{dataLanguage === "ar" ? "تحديث" : "Update"}</th>
                <th>{dataLanguage === "ar" ? "حذف" : "Delete"}</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {studentsData.length ? (
            studentsData.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.BOD}</td>
                <td>{student.admission_date}</td>
                <td>{student.gender}</td>
                <td>{student.student_status}</td>
                <td>{student.feeID}</td>
                <td>{student.classID}</td>
                <td>{student.user_id}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleNavigateUpdate(
                        e,
                        navigate,
                        UPDATE_STUDENT_TYPE,
                        student.user_id
                      )
                    }
                  >
                    {dataLanguage === "ar" ? "تحديث" : "Update"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) =>
                      handleDelete(
                        e,
                        student.user_id,
                        STUDENT_TYPE,
                        `${URL_DELELE_STUDENT}${student.user_id}`,
                        setStudentsData,
                        setMsg,
                        setError,
                        GET_METHOD,
                        URL_GET_STUDENTS,
                        dataLanguage
                      )
                    }
                  >
                    {dataLanguage === "ar" ? "حذف" : "Delete"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={addStudentHeadings.length} className="text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>{" "}
      <ToastContainer style={{ marginTop: "80px" }} />
    </div>
  );
};

export default AdminViewStudents;
