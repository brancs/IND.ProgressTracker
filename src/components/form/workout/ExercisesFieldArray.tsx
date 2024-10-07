import ControlledInput from '@/components/common/ControlledInput';
import SetsFieldArray from '@/components/form/workout/SetsFieldArray';
import { Button } from '@/components/ui/button';
import { useFieldArray, useFormContext } from 'react-hook-form';

function ExercisesFieldArray() {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    name: 'exercises',
    control: control,
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Exercises</h2>
        <Button
          type="button"
          onClick={() =>
            append({
              description: '',
              sets: [{ repetitions: '0', load: '0' }],
            })
          }
        >
          Add Exercise
        </Button>
      </div>
      <ul>
        {fields.map((_field, index) => (
          <li key={index} className="flex flex-col gap-2">
            <ControlledInput
              name={`exercises.${index}.description`}
              label="Description"
            />
            <SetsFieldArray parentIndex={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExercisesFieldArray;
