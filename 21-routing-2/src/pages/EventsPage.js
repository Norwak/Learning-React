import { Link } from "react-router-dom";

const dummy_events = [
 {id: 'e1', title: 'Some event'},
 {id: 'e2', title: 'Some other event'},
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {dummy_events.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}