import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addStudentHeadings } from "../../scripts/config";

const AdminViewStudents = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [studentsData, setStudentsData] = useState([]);

  const fetchStudentsData = async () => {
    try {
      const url =
        "http://127.0.0.1/school-managment-system-full/backend/get_all_students.php";

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

      //   console.log(response);
      // Parse JSON response
      const data = await response.json();

      //   console.log(data);

      setStudentsData(data.studentsData);
      if (data.success) {
        // console.log(data.studentsData);
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
    fetchStudentsData();
  }, []);

  const handleDelete = async (e, studentID) => {
    e.preventDefault();
    console.log("Deleting student with ID:", studentID); // Add this log to check the studentID
    try {
      const url = `http://127.0.0.1/school-managment-system-full/backend/delete.php?id=${studentID}`;

      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      if (data.success) {
        console.log(data.message);
        fetchStudentsData();
      } else {
        console.error("Error deleting student:", data.message); // Log the error message from server
      }
    } catch (error) {
      console.error("Error during delete operation:", error); // Log any network or other errors
    }
  };

  const navigate = useNavigate();

  const handleNavigateUpdate = (e, studentID) => {
    e.preventDefault();
    navigate(`/supervisor/update_student/${studentID}`);
  };

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
                  <th key={index}>{heading}</th>
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
                    onClick={(e) => handleNavigateUpdate(e, student.user_id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, student.user_id)}
                  >
                    Delete
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
      </Table>
    </div>
  );
};

export default AdminViewStudents;
