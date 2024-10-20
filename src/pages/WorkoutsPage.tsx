import Stack from '@/components/common/Stack';
import ButtonBack from '@/components/layout/ButtonBack';
import useWorkout from '@/context/WorkoutContext';
import { Link } from 'react-router-dom';

function WorkoutsPage() {
  const { workouts } = useWorkout();

  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack to="/" />
        <h1 className="text-3xl font-bold md:text-4xl">Workouts</h1>
      </div>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.description}>
            <Link to={`/workout/view/${workout.id}`}>
              Workout {workout.description}
            </Link>
          </li>
        ))}
      </ul>
    </Stack>
  );
}

export default WorkoutsPage;
