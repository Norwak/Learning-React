import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

let mode = 'no';

function App() {
  let [projects, newProjects] = useState([
    {id: 1, title: 'Learning React'},
    {id: 2, title: 'Mastering React'}
  ]);
  const [activeTaskId, newActiveTaskId] = useState(0);

  projects = structuredClone(projects);

  function changeMode(newMode, projectId = 0) {
    if (newMode !== 'new') {
      mode = newMode;
      newActiveTaskId(projectId);
    } else {
      const newProjectId = projects.map(project => project.id).reduce((res, id) => id > res ? id : res) + 1;
      mode = 'edit';
      newActiveTaskId(newProjectId);
    }
  }

  return (
    <div className="main-body">
      <Sidebar projects={projects} activeTaskId={activeTaskId} changeModeEvent={changeMode} />

      <Main mode={mode} changeModeEvent={changeMode} />
    </div>
  );
}

export default App;
