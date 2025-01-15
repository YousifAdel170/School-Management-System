import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "react-bootstrap";

const StudentPage = () => {
  return (
    <div style={{ flex: "1" }}>
      {" "}
      <NavBar />
      <Container>StudentPage</Container>;
    </div>
  );
};

export default StudentPage;
