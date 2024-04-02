import Tasks from "./Tasks";

export default function ViewProject({project, removeProjectEvent}) {
  return (
    <section className="view-project" id="view-project">
      <header className="view-project__header">
        <div>
          <h1 className="view-project__title">{project.title}</h1>
          <div className="view-project__date">{project.date}</div>
        </div>
        <ul className="actions">
          <li className="actions__item">
            <button className="actions__button actions__button--transparent actions__button--delete" onClick={() => removeProjectEvent(project.id)}>Delete</button>
          </li>
        </ul>
      </header>

      <div className="view-project__body">
        {project.content}
      </div>

      <hr className="separator" />

      <Tasks projectId={project.id} />
    </section>
  );
}