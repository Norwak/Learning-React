import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

let mode = 'no';

function App() {
  let [projects, newProjects] = useState([
    {id: 1, title: 'Learning React', date: 'Nov 14, 2023', content: `Learn react from the ground up.
    
Start with the basics, finish with advanced knowledge.`},
    {id: 2, title: 'Mastering React', date: 'Dec 29, 2024', content: '<p>Mastering react by constantly honing your skills.</p>'}
  ]);
  const [activeProjectId, newActiveProjectId] = useState(0);

  projects = structuredClone(projects);

  const newProjectId = 1;
  if (projects.length) {
    const newProjectId = projects.map(project => project.id).reduce((res, id) => id > res ? id : res) + 1;
  }

  function changeMode(newMode, projectId = 0) {
    if (newMode !== 'new') {
      mode = newMode;
      newActiveProjectId(projectId);
    } else {
      mode = 'edit';
      newActiveProjectId(newProjectId);
    }
  }

  function appendProject({title, date, content}) {
    newProjects((prevProjects) => [
      ...prevProjects,
      {id: newProjectId, title, date, content}
    ]);
    changeMode('view', newProjectId);
  }

  function removeProject(id) {
    newProjects((prevProjects) => prevProjects.filter(project => project.id !== id));
    changeMode('no');
  }

  return (
    <div className="main-body">
      <Sidebar projects={projects} activeProjectId={activeProjectId} changeModeEvent={changeMode} />

      <Main mode={mode} project={projects.find(project => project.id === activeProjectId)} changeModeEvent={changeMode} appendProjectEvent={appendProject} removeProjectEvent={removeProject} />
    </div>
  );
}

export default App;
