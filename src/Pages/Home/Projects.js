import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ComplexButton from "./ComplexButton/ComplexButton";
import "./projects.css";
const Projects = () => {
  return (
    <div id="Projects">
      <div className="project-box">
        <h2 className="project-h2">Latest Projects</h2>
        <p className="project-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, non!
          Lorem ipsum dolor sit amet <br /> consectetur non! Lorem ipsum dolor
          sit amet consectetur non! Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Project One">
          <ComplexButton></ComplexButton>
        </Tab>
        <Tab eventKey="profile" title="Project Two">
          <ComplexButton></ComplexButton>
        </Tab>
        <Tab eventKey="longer-tab" title="Project Three">
          <ComplexButton></ComplexButton>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
