import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenExpirationTime } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) return;

    if (token === 'EXPIRED') {
      submit(null, {action: '/logout', method: 'POST'});
      return;
    }

    const expirationTime = getTokenExpirationTime();
    console.log(expirationTime);
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'POST'});
    }, expirationTime);
  }, [token]); 

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
