import React from "react";

const Skills = () => {
  return (
    <div id="Skills">
      <progress className="progress w-56" value={0} max="100"></progress>
      <progress className="progress w-56" value="10" max="100"></progress>
      <progress className="progress w-56" value="40" max="100"></progress>
      <progress className="progress w-56" value="70" max="100"></progress>
      <progress className="progress w-56" value="100" max="100"></progress>
    </div>
  );
};

export default Skills;
