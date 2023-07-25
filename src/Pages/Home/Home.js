import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Service from "./Service/Service";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div id="home">
      <AboutMe></AboutMe>

      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
