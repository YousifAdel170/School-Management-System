import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Landing from "../components/Home/Landing";
import Features from "../components/Home/Features";
import About from "../components/Home/About";

const HomePage = () => {
  return (
    <div style={{ flex: "1" }}>
      {" "}
      <NavBar />
      <Landing />
      <Container>
        <Features />
        <About />
      </Container>
    </div>
  );
};

export default HomePage;
