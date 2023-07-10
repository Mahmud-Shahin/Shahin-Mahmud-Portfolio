import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <AboutMe></AboutMe>

      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
