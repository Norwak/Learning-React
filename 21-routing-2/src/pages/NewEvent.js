import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEvent() {
  return (
    <EventForm />
  );
}

export async function newEventAction({request, params}) {
  const formData = await request.formData();
  const eventData = Object.fromEntries(formData.entries());

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({message: 'Could not save event.'}, {status: 500});
  }

  return redirect('/events/');
}