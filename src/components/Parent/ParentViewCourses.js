import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import {
  addSubjectsHeadings,
  GET_METHOD,
  MESSAGE_DELAY,
  URL_GET_SUBJECTS,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";

const ParentViewCourses = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);

  const dataLanguage = useSelector((state) => state.language);

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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={addSubjectsHeadings.length} className="text-center">
                {dataLanguage === "ar"
                  ? "لم يتم العثور على مواد."
                  : "No students found."}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ParentViewCourses;
