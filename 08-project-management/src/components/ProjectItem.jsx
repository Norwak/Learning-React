export default function ProjectItem({project, active, changeModeEvent}) {
  const classList = active ? 'project-item__button active' : 'project-item__button';
  return (
    <li className="project-item">
      <button className={classList} type="button" onClick={() => changeModeEvent('view', project.id)}>{project.title}</button>
    </li>
  );
}