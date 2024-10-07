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
  exercises: z.array(exerciseSchema),
});

function WorkoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      exercises: [{ description: '', sets: [{ repetitions: '0', load: '0' }] }],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-end gap-2">
          <ControlledInput name="description" label="Description" />
        </div>
        <div className="w-full">
          <ExercisesFieldArray />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
export default WorkoutForm;
