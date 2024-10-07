import Stack from '@/components/common/Stack';
import ButtonBack from '@/components/layout/ButtonBack';
import { useParams } from 'react-router-dom';

type PageRouteParams = { workoutId: string };

function WorkoutViewPage() {
  const routeParams = useParams<PageRouteParams>();

  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack />
        <h1 className="text-4xl font-bold">Workout {routeParams.workoutId}</h1>
      </div>
    </Stack>
  );
}

export default WorkoutViewPage;
