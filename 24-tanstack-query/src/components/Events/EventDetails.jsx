import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({id: params.id, signal}),
  });

  const {mutate, isPending: isPendingDeletion, isError: isErrorDeletion, error: errorDeleteion} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });



  function startDeletion() {
    setIsDeleting(true);
  }

  function stopDeletion() {
    setIsDeleting(false);
  }

  function deleteThisEvent() {
    mutate({id: params.id});
  }



  let content;
  if (isLoading) {
    content = (
      <div className="center" id="event-details-content">
        <p>Fetching event data...</p>
      </div>
    );
  }
  if (isError) {
    content = (
      <div className="center" id="event-details-content">
        <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to fetch event data, please try again later'} />
      </div>
    );
  }
  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button type="button" onClick={startDeletion}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={stopDeletion}>
          <h2>Are you sure?</h2>
          <p>Do you really want to delete this event? This action cannot be undone</p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button type="button" className="button-text" onClick={stopDeletion}>Cancel</button>
                <button type="button" className="button" onClick={deleteThisEvent}>Delete</button>
              </>
            )}
          </div>
          {isErrorDeletion && <ErrorBlock title="Failed to delete event" message={errorDeleteion.info?.message || 'Failed to delete, please try later'} />}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
