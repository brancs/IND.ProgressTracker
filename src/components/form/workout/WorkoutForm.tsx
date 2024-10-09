import ControlledInput from '@/components/common/ControlledInput';
import ExercisesFieldArray from '@/components/form/workout/ExercisesFieldArray';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

function WorkoutForm() {
  const form = useForm<WorkoutFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      exercise: '',
      exercises: [],
    },
  });

  function onSubmit(values: WorkoutFormType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ControlledInput name="description" label="Workout Description" />
        <div className="w-full">
          <ExercisesFieldArray />
        </div>
        <Button type="submit">Finalizar</Button>
      </form>
    </Form>
  );
}

export default WorkoutForm;
