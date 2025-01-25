import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  addSubjectsHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  SUBJECT_TYPE,
  UPDATE_SUBJECT_TYPE,
  URL_DELELE_SUBJECT,
  URL_GET_SUBJECTS,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";
import { handleDelete } from "../../Logic/handleDelete";
import { handleNavigateUpdate } from "../../Logic/handleNavigateUpdate";

const AdminViewCourses = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);

  const dataLanguage = useSelector((state) => state.language);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData(
      setSubjectsData,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_SUBJECTS,
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
      <h3>{dataLanguage === "ar" ? "جدول المواد" : "Subjects Table"}</h3>
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
            {addSubjectsHeadings.length
              ? addSubjectsHeadings.map((heading, index) => (
                  <th key={index}>
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
            {addSubjectsHeadings.length ? (
              <>
                <th>{dataLanguage === "ar" ? "تحديث" : "Update"}</th>
                <th>{dataLanguage === "ar" ? "حذف" : "Delete"}</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {subjectsData.length ? (
            subjectsData.map((subject, index) => (
              <tr key={index}>
                <td>{subject.ID}</td>
                <td>{subject.subject_name}</td>
                <td>{subject.subject_code}</td>
                <td>{subject.teachingstaff_ID}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleNavigateUpdate(
                        e,
                        navigate,
                        UPDATE_SUBJECT_TYPE,
                        subject.ID
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
                        subject.ID,
                        SUBJECT_TYPE,
                        `${URL_DELELE_SUBJECT}${subject.ID}`,
                        setSubjectsData,
                        setMsg,
                        setError,
                        GET_METHOD,
                        URL_GET_SUBJECTS,
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
              <td colSpan={addSubjectsHeadings.length} className="text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <ToastContainer style={{ marginTop: "80px" }} />
    </div>
  );
};

export default AdminViewCourses;
