import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";
import {
  MESSAGE_DELAY,
  POST_METHOD,
  URL_GET_STATISTICS,
} from "../../scripts/config";

const AdminStatistics = () => {
  const [statsData, setStatsData] = useState([]);
  const [studentCounter, setStudentCounter] = useState(0);
  const [subjectCounter, setSubjectCounter] = useState(0);
  const [averageStdPerSubject, setAverageStdPerSubject] = useState(0);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
    fetchData(
      setStatsData,
      setMsg,
      setError,
      POST_METHOD,
      URL_GET_STATISTICS,
      dataLanguage
    );
  }, [dataLanguage]);

  useEffect(() => {
    if (statsData.length) {
      setStudentCounter(statsData[0].std_counter);
      setSubjectCounter(statsData[1].subject_counter);
      setAverageStdPerSubject(statsData[2].average);
    }
  }, [statsData]);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div className="table">
      <h3>{dataLanguage === "ar" ? "جدول الإحصائيات" : "Stats Table"}</h3>
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
            <th>
              {dataLanguage === "ar" ? "إجمالي الطلاب" : "Total Students"}
            </th>
            <th>
              {dataLanguage === "ar" ? "إجمالي المواد" : "Total Subjects"}
            </th>
            <th>
              {dataLanguage === "ar"
                ? "متوسط الطلاب لكل مادة"
                : "Average Students Per Subject"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{studentCounter}</td>
            <td>{subjectCounter}</td>
            <td>{averageStdPerSubject}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminStatistics;
