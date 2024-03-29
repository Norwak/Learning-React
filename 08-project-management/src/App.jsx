function App() {
  return (
    <div className="main-body">
     <aside className="sidebar">
        <div className="sidebar__title">Your projects</div>
        <button className="sidebar__add">+ Add Project</button>
        <ul className="sidebar__list">
          <li className="project-item">
            <button className="project-item__button active" type="button">Learning React</button>
          </li>
          <li className="project-item">
            <button className="project-item__button" type="button">Mastering React</button>
          </li>
        </ul>
      </aside> 

      <main>

        {/* <section className="edit-project" id="edit-project">
          <ul className="edit-project__actions">
            <li className="edit-project__action">
              <button className="edit-project__button edit-project__button--transparent">Cancel</button>
            </li>
            <li className="edit-project__action">
              <button className="edit-project__button">Save</button>
            </li>
          </ul>

          <form className="edit-project__form">
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
        </section> */}

      </main>
    </div>
  );
}

export default App;
