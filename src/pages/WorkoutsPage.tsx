import Stack from '@/components/common/Stack';
import ButtonBack from '@/components/layout/ButtonBack';
import { Link } from 'react-router-dom';

function WorkoutsPage() {
  const workouts = [1, 2, 3, 4];

  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack />
        <h1 className="text-4xl font-bold">Workouts</h1>
      </div>
      <ul>
        {workouts.map((workout) => (
          <li key={workout}>
            <Link to={`/workout/view/${workout}`}>Workout {workout}</Link>
          </li>
        ))}
      </ul>
    </Stack>
  );
}

export default WorkoutsPage;
