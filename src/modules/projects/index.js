import React from "react";
import Todolist from "../todo/index";

const ProjectNames = {
  TODO_LIST: "TODO list",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState();
  return (
    <div>
      {!selectedProject && (
        <div>
          <a
            onClick={() => {
              setSelectedProject(ProjectNames.TODO_LIST);
            }}
          >
            {ProjectNames.TODO_LIST}
          </a>
        </div>
      )}

      {selectedProject === ProjectNames.TODO_LIST && <Todolist />}
    </div>
  );
}
