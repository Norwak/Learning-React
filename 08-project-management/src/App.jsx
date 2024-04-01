import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

function App() {
  let [projects, newProjects] = useState([
    {id: 1, title: 'Learning React'},
    {id: 2, title: 'Mastering React'}
  ]);
  const [activeTaskId, newActiveTaskId] = useState();

  projects = structuredClone(projects);

  return (
    <div className="main-body">
      <Sidebar projects={projects} activeTaskId={activeTaskId} />

      <Main />
    </div>
  );
}

export default App;
