import React, { useEffect, useState } from "react";
import "./AdminAdmission.css";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addTeacherHeadings } from "../../scripts/config";
import { useSelector } from "react-redux";

const AdminViewTeachers = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);

  const dataLanguage = useSelector((state) => state.language);

  const fetchTeachersData = async () => {
    try {
      const url =
        "http://127.0.0.1/school-managment-system-full/backend/get_all_teachers.php";

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

      setTeachersData(data.teachersData);
      if (data.success) {
        // console.log(data.teachersData);
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
    fetchTeachersData();
  }, []);

  const handleDelete = async (e, teacherID) => {
    e.preventDefault();
    console.log("Deleting Teacher with ID:", teacherID); // Add this log to check the teacherID
    try {
      const url = `http://127.0.0.1/school-managment-system-full/backend/delete_teacher.php?id=${teacherID}`;

      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      if (data.success) {
        // console.log(data.message);
        fetchTeachersData();
      } else {
        console.error("Error deleting student:", data.message); // Log the error message from server
      }
    } catch (error) {
      console.error("Error during delete operation:", error); // Log any network or other errors
    }
  };

  const navigate = useNavigate();

  const handleNavigateUpdate = (e, teacherID) => {
    e.preventDefault();
    navigate(`/supervisor/update_teacher/${teacherID}`);
  };

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
                    onClick={(e) => handleNavigateUpdate(e, teacher.user_id)}
                  >
                    {dataLanguage === "ar" ? "تحديث" : "Update"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, teacher.user_id)}
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
