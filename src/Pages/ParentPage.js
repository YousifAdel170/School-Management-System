import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const ParentPage = () => {
  return (
    <div style={{ flex: "1" }}>
      {" "}
      <NavBar />
      <Container>ParentPage</Container>;
    </div>
  );
};

export default ParentPage;
