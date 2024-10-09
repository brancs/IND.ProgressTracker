import Stack from '@/components/common/Stack';
import WorkoutForm from '@/components/form/workout/WorkoutForm';
import ButtonBack from '@/components/layout/ButtonBack';

function WorkoutNewPage() {
  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack />
        <h1 className="text-4xl font-bold">New Workout</h1>
      </div>
      <WorkoutForm />
    </Stack>
  );
}

export default WorkoutNewPage;
