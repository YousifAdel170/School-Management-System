import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import {
  GET_METHOD,
  MESSAGE_DELAY,
  URL_GET_STUDENTS,
  viewStudentHeadings,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";

const TeacherViewStudents = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

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
      <h3>{dataLanguage === "ar" ? "جدول الطلاب" : "Students Table"}</h3>
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
            {viewStudentHeadings.length
              ? viewStudentHeadings.map((heading, index) => (
                  <th key={index}>
                    {" "}
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {studentsData.length ? (
            studentsData.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.classID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={viewStudentHeadings.length} className="text-center">
                {dataLanguage === "ar"
                  ? "لم يتم العثور على طلاب."
                  : "No students found."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TeacherViewStudents;
