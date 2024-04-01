export default function EditProject() {
  return (
    <section className="edit-project" id="edit-project">
      <ul className="actions">
        <li className="actions__item">
          <button className="actions__button actions__button--transparent">Cancel</button>
        </li>
        <li className="actions__item">
          <button className="actions__button">Save</button>
        </li>
      </ul>

      <form className="edit-project__form" id="edit-project-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="date">Due date</label>
          <input type="date" id="date" />
        </div>
      </form>
    </section>
  );
}