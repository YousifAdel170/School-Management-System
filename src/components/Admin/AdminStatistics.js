import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdminStatistics = () => {
  const [subjectCounter, setSubjectCounter] = useState();
  const [studentCounter, setStudentCounter] = useState();
  const [averageStdPerSub, setAverageStdPerSub] = useState();
  const fetchAdmissionData = async () => {
    try {
      const url =
        "http://127.0.0.1/school-managment-system-full/backend/stats.php";

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
      const data = await response.json();

      // console.log(data.statsData[0]);
      // console.log(data.statsData[1]);
      // console.log(data.statsData[2]);
      if (data.success) {
        setStudentCounter(data.statsData[0].std_counter);
        setSubjectCounter(data.statsData[1].subject_counter);
        setAverageStdPerSub(data.statsData[2].average);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchAdmissionData();
  }, []);

  return (
    <div className="table">
      <h3>Stats Table</h3>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Total Students</th>
            <th>Total Subjects</th>
            <th>Average Students Per Subjects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{studentCounter}</td>
            <td>{subjectCounter}</td>
            <td>{averageStdPerSub}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminStatistics;
