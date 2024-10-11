import Stack from '@/components/common/Stack';
import ButtonBack from '@/components/layout/ButtonBack';
import useWorkout from '@/context/WorkoutContext';
import { Workout } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type PageRouteParams = { workoutId: string };

function WorkoutViewPage() {
  const routeParams = useParams<PageRouteParams>();
  const { workouts } = useWorkout();
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    if (routeParams.workoutId) {
      setWorkout(
        workouts.find((workout) => workout.id === routeParams.workoutId),
      );
    }
  }, [workouts, routeParams.workoutId]);

  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack />
        <h1 className="text-4xl font-bold">{workout?.description}</h1>
        <ul>
          {workout?.exercises.map((exercise) => (
            <li key={exercise.id}>
              <h2 className="text-xl font-bold">{exercise.description}</h2>
              <ul>
                {exercise.sets.map((set, index) => (
                  <li key={set.id} className="flex gap-4 ps-2">
                    <div>Set: {index + 1}</div>
                    <div>Reps: {set.repetitions}</div>
                    <div>Load: {set.load}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Stack>
  );
}

export default WorkoutViewPage;
