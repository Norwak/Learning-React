import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  let [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  availablePlaces = structuredClone(availablePlaces);



  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch('http://localhost:3000/places');
        // const response = await fetch('http://localhost:3000/placessss');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(data.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          
          setIsFetching(false);
        });
      } catch (error) {
        setError({message: error.message || 'Could new fetch places, pleease try again later.'});

        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);
  


  if (error) {
    return (<Error title="An error occured!" message={error.message} />);
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
