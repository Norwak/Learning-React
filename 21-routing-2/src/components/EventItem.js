import { Link, json, redirect, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

export default function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const confirmed = window.confirm('Are you sure about that?');

    if (confirmed) {
      submit(null, {method: 'DELETE'});
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`/events/${event.id}/edit/`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}



export async function deleteEventAction({params}) {
  const response = await fetch(`http://localhost:8080/events/${params.id}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw json({message: 'Could not delete event.'}, {status: 500});
  }

  return redirect('/events/');
}