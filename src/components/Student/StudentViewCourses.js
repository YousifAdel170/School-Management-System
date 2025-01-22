import React, { useEffect, useState } from "react";
import "../Admin/AdminAdmission.css";
import { Table } from "react-bootstrap";
import { addSubjectsHeadings } from "../../scripts/config";
import { useSelector } from "react-redux";

const StudentViewCourses = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [subjectsData, setSubjectsData] = useState([]);
  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
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
          throw new Error(
            dataLanguage === "ar"
              ? "الاستجابة من الشبكة لم تكن صحيحة"
              : "Network response was not ok"
          );
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
        setError(
          dataLanguage === "ar"
            ? "حدث خطأ ما. يرجى المحاولة مرة أخرى."
            : "Something went wrong. Please try again."
        );
      }
    };

    fetchSubjectsData();
  }, [msg, dataLanguage]);

  return (
    <div className="table">
      <h3>
        {dataLanguage === "ar" ? "جدول المواد الدراسية" : "Subjects Table"}
      </h3>
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
                    {" "}
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
                {dataLanguage === "ar" ? "لا توجد مواد" : "No subjects found"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentViewCourses;
