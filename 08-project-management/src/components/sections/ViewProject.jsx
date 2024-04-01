import Tasks from "./Tasks";

export default function ViewProject() {
  return (
    <section className="view-project" id="view-project">
      <header className="view-project__header">
        <div>
          <h1 className="view-project__title">Learning React</h1>
          <div className="view-project__date">Dec 29, 2024</div>
        </div>
        <ul className="actions">
          <li className="actions__item">
            <button className="actions__button actions__button--transparent actions__button--delete">Delete</button>
          </li>
        </ul>
      </header>

      <div className="view-project__body">
        <p>Learn react from the ground up.</p>
        <p>&nbsp;</p>
        <p>Start with the basics, finish with advanced knowledge.</p>
      </div>

      <hr className="separator" />

      <Tasks />
    </section>
  );
}