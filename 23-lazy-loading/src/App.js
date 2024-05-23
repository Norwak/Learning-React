import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
const BlogPage = lazy(() => import('./pages/Blog.js'));
const PostPage = lazy(() => import('./pages/Post.js'));



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: <Suspense fallback={<p>Loading...</p>}><BlogPage /></Suspense>,
            loader: () => import('./pages/Blog.js').then(module => module.loader())
          },
          {
            path: ':id',
            element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>,
            loader: (meta) => import('./pages/Post.js').then(module => module.loader(meta))
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
