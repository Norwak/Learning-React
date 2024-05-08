import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetail() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={data.event}>
        {loadedData => <EventItem event={loadedData.event} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={data.events}>
        {loadedData => <EventsList events={loadedData.events} />}
      </Await>
    </Suspense>
      
      
    </>
  );
}


async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}/`);

  if (!response.ok) {
    throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  }

  return await response.json();
}


async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
    throw json({message: 'Could not fetch events.'}, {status: 500});
  }

  return await response.json();
}


export async function eventLoader({request, params}) {
  return defer({
    event: await loadEvent(params.id),
    events: loadEvents(),
  });
}