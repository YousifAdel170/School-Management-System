import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/utilities/NavBar";
import Landing from "../components/Home/Landing";
import Features from "../components/Home/Features";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import TeachingStaff from "../components/Home/TeachingStaff";

const HomePage = () => {
  return (
    <div style={{ flex: "1" }}>
      {" "}
      <NavBar logout={0} />
      <Landing />
      <Container>
        <Features />
        <About />
        <Services />
        <TeachingStaff />
      </Container>
    </div>
  );
};

export default HomePage;
