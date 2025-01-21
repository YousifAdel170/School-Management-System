import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { admissionHeadings } from "../../scripts/config";

const AdminAdmission = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [admissionData, setAdmissionData] = useState([]);

  const fetchAdmissionData = async () => {
    try {
      const url =
        "http://127.0.0.1/school-managment-system-full/backend/get_admission.php";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Check if the response is not OK
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // console.log(response);
      // Parse JSON response
      const data = await response.json();

      // console.log(data);

      setAdmissionData(data.admissionData);
      if (data.success) {
        // console.log(data.admissionData);
        setMsg(data.message);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchAdmissionData();
  }, []);

  const getRoleNameFromID = (roleID) => {
    switch (roleID) {
      case "1":
        return "Student";
      case "2":
        return "Teaching-staff";
      case "3":
        return "Parent";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="table">
      <h3>Admission Table</h3>
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
                  <th key={index}>{heading}</th>
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
