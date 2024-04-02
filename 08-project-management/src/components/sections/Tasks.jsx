import { useRef, useState } from "react";
import Task from "../Task";

export default function Tasks({projectId}) {
  let [tasks, newTasks] = useState([
    {id: 1, projectId: 1, title: 'Learn the basics'},
    {id: 2, projectId: 1, title: 'Learn the basics'},
    {id: 3, projectId: 1, title: 'Learn the basics Learn the basics Learn the basics Learn the basics Learn the basics'},
  ]);
  const titleElem = useRef();

  tasks = structuredClone(tasks);

  let newTaskId = 1;
  if (tasks.length) {
    newTaskId = tasks.map(task => task.id).reduce((res, id) => id > res ? id : res) + 1;
  }

  const matchingTasks = tasks.filter(task => task.projectId === projectId);



  function prependTask(title) {
    newTasks(prevTasks => [
      {id: newTaskId, projectId, title},
      ...prevTasks,
    ]);  
  }

  function removeTask(id) {
    newTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }



  return (
    <section className="tasks" id="tasks">
      <h2 className="tasks__title">Tasks</h2>

      <form className="tasks__form" id="tasks-form" onSubmit={(e) => {e.preventDefault()}}>
        <div className="input-group">
          <input type="text" className="tasks__input" ref={titleElem} />
          <button type="submit" className="tasks__submit" onClick={() => prependTask(titleElem.current.value)}>Add Task</button>
        </div>
      </form>

      {matchingTasks.length === 0 && <p className="tasks__none">This project doesn't have any tasks yet.</p>}

      {matchingTasks.length > 0 ? 
        <ul className="tasks__list">
          {matchingTasks.map(task => <Task task={task} removeTaskEvent={removeTask} />)}
        </ul>
      : ''}
    </section>
  );
}