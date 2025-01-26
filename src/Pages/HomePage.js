// Import React library for creating the component
import React from "react";

// Import react-bootstrap components
import { Container } from "react-bootstrap";

// Import custom components used within the homepage
import NavBar from "../components/utilities/NavBar";
import Landing from "../components/Home/Landing";
import Features from "../components/Home/Features";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import TeachingStaff from "../components/Home/TeachingStaff";

/**
 * HomePage component serves as the main layout for the homepage.
 * It includes the navigation bar and sequential sections like Landing, Features, About, Services, and Teaching Staff.
 */
const HomePage = () => {
  return (
    <div style={{ flex: "1" }}>
      {/* Render the navigation bar with 'logout' prop set to 0, indicating the user is not logged out */}
      <NavBar logout={0} />

      {/* Render the Landing section */}
      <Landing />

      {/* Container component to wrap the sections*/}
      <Container>
        {/* Features section  */}
        <Features />

        {/* About section */}
        <About />

        {/* Services section*/}
        <Services />

        {/* TeachingStaff section*/}
        <TeachingStaff />
      </Container>
    </div>
  );
};

// Exporting the HomePage component to be used in other parts of the application
export default HomePage;
