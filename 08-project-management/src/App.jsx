function App() {
  return (
    <div className="main-body">
     <aside className="sidebar">
        <h2 className="sidebar__title">Your projects</h2>
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

        {/* <section className="no-project" id="no-project">
          <img src="/public/logo.png" alt="Logo" className="no-project__logo" />

          <h1 className="no-project__title">No Project Selected</h1>

          <p className="no-project__description">Select a project or get started with a new one</p>

          <button className="no-project__new" type="button">Create new project</button>
        </section> */}

        {/* <section className="view-project" id="view-project">
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

          <div className="tasks" id="tasks">
            <h2 className="tasks__title">Tasks</h2>

            <form className="tasks__form" id="tasks-form">
              <div className="input-group">
                <input type="text" className="tasks__input" />
                <button type="submit" className="tasks__submit">Add Task</button>
              </div>
            </form>

            <p className="tasks__none">This project doesn't have any tasks yet.</p>

            <ul className="tasks__list">
              <li className="task">
                <div className="task__title">Learn the basics</div>
                <button type="button" className="task__delete">Delete</button>
              </li>
              <li className="task">
                <div className="task__title">Learn the basics</div>
                <button type="button" className="task__delete">Delete</button>
              </li>
              <li className="task">
                <div className="task__title">Learn the basics Learn the basics Learn the basics Learn the basics Learn the basics </div>
                <button type="button" className="task__delete">Delete</button>
              </li>
            </ul>
          </div>
        </section> */}

        {/* <section className="edit-project" id="edit-project">
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
        </section> */}

      </main>
    </div>
  );
}

export default App;
