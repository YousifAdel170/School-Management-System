import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import { viewStudentHeadings } from "../../scripts/config";
import { useSelector } from "react-redux";

const TeacherViewStudents = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
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
          throw new Error(
            dataLanguage === "ar"
              ? "الاستجابة من الشبكة لم تكن صحيحة"
              : "Network response was not ok"
          );
        }

        // Parse JSON response
        const data = await response.json();

        setStudentsData(data.studentsData);
        if (data.success) {
          setMsg(data.message);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(
          dataLanguage === "ar"
            ? "حدث خطأ ما. يرجى المحاولة مرة أخرى."
            : "Something went wrong. Please try again."
        );
      }
    };

    fetchStudentsData();
  }, [dataLanguage]);

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
