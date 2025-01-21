import React from "react";
import NavBar from "../components/utilities/NavBar";
import { Container } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />
      <Container>ContactPage</Container>
    </div>
  );
};

export default ContactPage;
