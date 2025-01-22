import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import { viewTeacherHeading } from "../../scripts/config";
import { useSelector } from "react-redux";

const ParentViewTeachers = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [teachersData, setTeachersData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
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
          throw new Error(
            dataLanguage === "ar"
              ? "الاستجابة من الشبكة لم تكن صحيحة"
              : "Network response was not ok"
          );
        }

        // Parse JSON response
        const data = await response.json();

        setTeachersData(data.teachersData);
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
    fetchTeachersData();
  }, [dataLanguage]);

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

export default ParentViewTeachers;
