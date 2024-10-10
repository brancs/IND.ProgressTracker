import Stack from '@/components/common/Stack';
import ExercisesFieldArray from '@/components/form/workout/ExercisesFieldArray';
import ButtonBack from '@/components/layout/ButtonBack';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useWorkout from '@/context/WorkoutContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';

const setSchema = z.object({
  repetitions: z.string().min(1),
  load: z.string().min(1),
});
const exerciseSchema = z.object({
  description: z.string().min(1).max(50),
  sets: z.array(setSchema),
});
const formSchema = z.object({
  description: z.string().min(1).max(50),
  exercise: z.string().max(100),
  exercises: z.array(exerciseSchema),
});

export type WorkoutFormType = z.infer<typeof formSchema>;

function WorkoutNewPage() {
  const [workoutName, setWorkoutName] = useState('');
  const { setWorkouts } = useWorkout();
  const routeParams = useParams();

  const form = useForm<WorkoutFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      exercise: '',
      exercises: [],
    },
  });

  useEffect(() => {
    if (routeParams.newWorkoutName) {
      form.setValue(
        'description',
        decodeURIComponent(routeParams.newWorkoutName),
      );
      setWorkoutName(routeParams.newWorkoutName);
    }
  }, [routeParams.newWorkoutName]);

  function onSubmit(values: WorkoutFormType) {
    const { exercise, ...fWorkout } = values;
    const newWorkout = { ...fWorkout, id: '123' };
    setWorkouts((workouts) => [...workouts, newWorkout]);
    console.log(values);
  }

  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <ButtonBack />
        <h1 className="text-4xl font-bold uppercase">{workoutName}</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="w-full">
            <ExercisesFieldArray />
          </div>
          <Button type="submit">Finalizar</Button>
        </form>
      </Form>
    </Stack>
  );
}

export default WorkoutNewPage;
