export default function Task({task, removeTaskEvent}) {
  return (
    <li className="task">
      <div className="task__title">{task.title}</div>
      <button type="button" className="task__delete" onClick={() => removeTaskEvent(task.id)}>Delete</button>
    </li>
  );
}