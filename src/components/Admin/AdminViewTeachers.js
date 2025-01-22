import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  addTeacherHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  TEACHER_TYPE,
  UPDATE_TEACHER_TYPE,
  URL_DELELE_TEACHER,
  URL_GET_TEACHER,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";
import { handleDelete } from "../../Logic/handleDelete";
import { handleNavigateUpdate } from "../../Logic/handleNavigateUpdate";

const AdminViewTeachers = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);

  const dataLanguage = useSelector((state) => state.language);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData(
      setTeachersData,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER,
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
      <h3>{dataLanguage === "ar" ? "جدول المعلمين" : "Teachers Table"}</h3>
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
            {addTeacherHeadings.length
              ? addTeacherHeadings.map((heading, index) => (
                  <th key={index}>
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
            {addTeacherHeadings.length ? (
              <>
                <th>{dataLanguage === "ar" ? "تحديث" : "Update"}</th>
                <th>{dataLanguage === "ar" ? "حذف" : "Delete"}</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {teachersData.length ? (
            teachersData.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.ID}</td>
                <td>{teacher.name}</td>
                <td>{teacher.specialization}</td>
                <td>{teacher.address}</td>
                <td>{teacher.BOD}</td>
                <td>{teacher.hire_date}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.salary}</td>
                <td>
                  {teacher.supervisorID ? `${teacher.supervisorID}` : "None"}
                </td>
                <td>{teacher.user_id}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleNavigateUpdate(
                        e,
                        navigate,
                        UPDATE_TEACHER_TYPE,
                        teacher.user_id
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
                        teacher.user_id,
                        TEACHER_TYPE,
                        `${URL_DELELE_TEACHER}${teacher.user_id}`,
                        setTeachersData,
                        setMsg,
                        setError,
                        GET_METHOD,
                        URL_GET_TEACHER,
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
              <td colSpan={addTeacherHeadings.length} className="text-center">
                No Teachers Found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewTeachers;
