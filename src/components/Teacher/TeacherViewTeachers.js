import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import {
  GET_METHOD,
  MESSAGE_DELAY,
  URL_GET_TEACHER,
  viewTeacherHeading,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";

const TeacherViewTeachers = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

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
            {viewTeacherHeading.length
              ? viewTeacherHeading.map((heading, index) => (
                  <th key={index}>
                    {" "}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {teachersData.length ? (
            teachersData.map((teacher, index) => (
              <tr key={index}>
                <td>{teacher.ID}</td>
                <td>{teacher.name}</td>
                <td>{teacher.specialization}</td>
                <td>{teacher.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={viewTeacherHeading.length} className="text-center">
                {dataLanguage === "ar"
                  ? "لم يتم العثور على معلمين."
                  : "No Teachers Found."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TeacherViewTeachers;
