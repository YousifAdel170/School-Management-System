import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import {
  admissionHeadings,
  MESSAGE_DELAY,
  POST_METHOD,
  URL_GET_ADMISSION,
} from "../../scripts/config";
import { useSelector } from "react-redux";
import { fetchData } from "../../Logic/fetchData";
import { getRoleNameFromID } from "../../Logic/getRoleNameFromID";

const AdminAdmission = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [admissionData, setAdmissionData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
    fetchData(
      setAdmissionData,
      setMsg,
      setError,
      POST_METHOD,
      URL_GET_ADMISSION,
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
      <h3>{dataLanguage === "ar" ? "جدول القبول" : "Admission Table"}</h3>
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
            {admissionHeadings.length
              ? admissionHeadings.map((heading, index) => (
                  <th key={index}>
                    {dataLanguage === "ar" ? heading.ar : heading.en}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {admissionData.length
            ? admissionData.map((admission, index) => (
                <tr key={index}>
                  <td>{admission.ID}</td>
                  <td>{admission.username}</td>
                  <td>{admission.email}</td>
                  <td>{admission.password}</td>
                  <td>{admission.roleID}</td>
                  <td>{getRoleNameFromID(admission.roleID)}</td>
                  <td>{admission.status}</td>
                  <td>{admission.created_at}</td>
                  <td>{admission.updated_at}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminAdmission;
