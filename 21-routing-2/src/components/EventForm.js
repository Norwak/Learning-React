import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';



export default function EventForm({ method = "POST", event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const responseData = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate(-1);
  }

  return (
    <Form method={method} className={classes.form}>
      {responseData && responseData.errors && (
        <ul>
          {Object.values(responseData.errors).map(err => <li key={err}>{err}</li>)}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>Cancel</button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}



export async function eventFormAction({request, params}) {
  const method = request.method;
  const formData = await request.formData();
  const eventData = Object.fromEntries(formData.entries());

  let url = 'http://localhost:8080/events/';
  if (method === 'PATCH') {
    url = `http://localhost:8080/events/${params.id}/`;
  }
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({message: 'Could not save event.'}, {status: 500});
  }

  return redirect('/events/');
}