import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const {state} = useNavigation();
  const submit = useSubmit();
  const params = useParams();
  const queryKey = ['events', params.id];

  const {data, isError, error} = useQuery({
    queryKey,
    queryFn: ({signal}) => fetchEvent({id: params.id, signal}),
    staleTime: 10000,
  });

  // const {mutate} = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     await queryClient.cancelQueries({queryKey});
  //     const previousEventData = queryClient.getQueryData(queryKey);

  //     queryClient.setQueryData(
  //       queryKey,
  //       data.event,
  //     );

  //     return {previousEventData};
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(
  //       queryKey,
  //       context.previousEventData,
  //     );
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events']);
  //   },
  // });



  function handleSubmit(formData) {
    submit(formData, {method: 'PUT'});
  }

  function handleClose() {
    navigate('../');
  }



  let content;
  if (isError) {
    content = (
      <>
        <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to load event. Please check your inputs and try again later'} />
        <div className="form-actions">
          <Link to="../" className='button'>
            Okay
          </Link>
        </div>
      </>
    );
  }
  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? <p>Sending data...</p> : (
          <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
          </>
        )}
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export async function eventLoader({params}) {
  const data = await queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({id: params.id, signal}),
    staleTime: 10000,
  });

  return data;
}

export async function editEventAction({request, params}) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);

  await updateEvent({id: params.id, event: updatedEventData});
  await queryClient.invalidateQueries(['events']);

  return redirect('../');
}