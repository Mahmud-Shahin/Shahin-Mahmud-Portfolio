import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ComplexButton from "./ComplexButton/ComplexButton";

const Projects = () => {
  return (
    <div id="Projects">
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
