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
    <div className="mx-auto max-w-3xl py-6">
      <WorkoutProvider>
        <RouterProvider router={router} />
      </WorkoutProvider>
    </div>
  );
}
export default App;
