import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import {
  WorkoutEditPage,
  WorkoutNewPage,
  WorkoutViewPage,
} from '@/pages/workout';
import WorkoutsPage from '@/pages/WorkoutsPage';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { WorkoutProvider } from './context';
import MainLayout from './layouts/MainLayout';

const router = createHashRouter([
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
    path: '/workout/new/:newWorkoutName',
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

function App() {
  return (
    <MainLayout>
      <WorkoutProvider>
        <RouterProvider router={router} />
      </WorkoutProvider>
    </MainLayout>
  );
}
export default App;
