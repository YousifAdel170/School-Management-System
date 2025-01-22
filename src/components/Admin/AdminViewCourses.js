import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addSubjectsHeadings } from "../../scripts/config";
import { useSelector } from "react-redux";

const AdminViewCourses = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

  const fetchSubjectsData = async () => {
    try {
      const url =
        "http://127.0.0.1/school-managment-system-full/backend/get_all_subjects.php";

      const response = await fetch(url, {
        method: "GET",
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

      setSubjectsData(data.subjectsData);
      if (data.success) {
        // console.log(data.subjectsData);
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
    fetchSubjectsData();
  }, [msg]);

  const handleDelete = async (e, subjectID) => {
    e.preventDefault();
    console.log("Deleting subject with ID:", subjectID); // Add this log to check the subjectID
    try {
      const url = `http://127.0.0.1/school-managment-system-full/backend/delete_subject.php?id=${subjectID}`;

      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      if (data.success) {
        console.log(data.message);
        fetchSubjectsData();
      } else {
        console.error("Error deleting subject:", data.message); // Log the error message from server
      }
    } catch (error) {
      console.error("Error during delete operation:", error); // Log any network or other errors
    }
  };

  const navigate = useNavigate();

  const handleNavigateUpdate = (e, subjectID) => {
    e.preventDefault();
    navigate(`/supervisor/update_subject/${subjectID}`);
  };

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
                    onClick={(e) => handleNavigateUpdate(e, subject.ID)}
                  >
                    {dataLanguage === "ar" ? "تحديث" : "Update"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, subject.ID)}
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
    </div>
  );
};

export default AdminViewCourses;
