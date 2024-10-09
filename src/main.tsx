import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import {
  WorkoutEditPage,
  WorkoutNewPage,
  WorkoutViewPage,
} from '@/pages/workout';
import WorkoutsPage from '@/pages/WorkoutsPage';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/workouts',
    element: <WorkoutsPage />,
  },
  {
    path: '/workout/new',
    element: <WorkoutNewPage />,
  },
  {
    path: '/workout/view/:workoutId',
    element: <WorkoutViewPage />,
  },
  {
    path: '/workout/edit/:workoutId',
    element: <WorkoutEditPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="mx-auto max-w-3xl py-6">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
