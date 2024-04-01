import Task from "../Task";

export default function Tasks() {
  return (
    <section className="tasks" id="tasks">
      <h2 className="tasks__title">Tasks</h2>

      <form className="tasks__form" id="tasks-form">
        <div className="input-group">
          <input type="text" className="tasks__input" />
          <button type="submit" className="tasks__submit">Add Task</button>
        </div>
      </form>

      <p className="tasks__none">This project doesn't have any tasks yet.</p>

      <ul className="tasks__list">
        <Task />
      </ul>
    </section>
  );
}