export default function ProjectItem({project, active}) {
  const classList = active ? 'project-item__button active' : 'project-item__button';
  return (
    <li className="project-item">
      <button className={classList} type="button" data-id={project.id}>{project.title}</button>
    </li>
  );
}