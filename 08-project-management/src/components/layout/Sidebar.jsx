import ProjectItem from "../ProjectItem";

export default function Sidebar({projects, activeTaskId, changeModeEvent}) {
  const newProjectId = projects.map(project => project.id).reduce((res, id) => id > res ? id : res) + 1;

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Your projects</h2>
      <button className="sidebar__add" onClick={() => changeModeEvent('edit', newProjectId)}>+ Add Project</button>
      <ul className="sidebar__list">

        {projects.map(project => <ProjectItem project={project} active={project.id === activeTaskId} changeModeEvent={changeModeEvent}/>)}

      </ul>
    </aside> 
  );
}