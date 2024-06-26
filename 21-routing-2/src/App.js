// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetail, { eventLoader } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./layouts/RootLayout";
import RootEventLayout from "./layouts/RootEventLayout";
import ErrorPage from "./pages/ErrorPage";
import { deleteEventAction } from "./components/EventItem";
import { eventFormAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./pages/NewsletterPage";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Homepage />},
      {
        path: 'events/',
        element: <RootEventLayout />,
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {path: ':id/', id: 'event-detail', loader: eventLoader, children: [
            {index: true, element: <EventDetail />, action: deleteEventAction},
            {path: 'edit', element: <EditEvent />, action: eventFormAction},
          ]},
          {path: 'new', element: <NewEvent />, action: eventFormAction},
        ],
      },
      {path: 'newsletter/', element: <NewsletterPage />, action: newsletterAction},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
