import { useRef } from "react";

export default function EditProject({changeModeEvent, appendProjectEvent}) {
  let title = useRef('');
  let description = useRef('');
  let date = useRef('');

  function save() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateObj = new Date(date.current.value);
    const dateStr = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();

    appendProjectEvent({
      title: title.current.value,
      date: dateStr,
      content: description.current.value,
    });
  }

  return (
    <section className="edit-project" id="edit-project">
      <ul className="actions">
        <li className="actions__item">
          <button className="actions__button actions__button--transparent" onClick={() => changeModeEvent('no')}>Cancel</button>
        </li>
        <li className="actions__item">
          <button className="actions__button" onClick={save}>Save</button>
        </li>
      </ul>

      <form className="edit-project__form" id="edit-project-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={title} />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea id="description"ref={description} ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="date">Due date</label>
          <input type="date" id="date" ref={date} />
        </div>
      </form>
    </section>
  );
}