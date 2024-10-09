import ControlledInput from '@/components/common/ControlledInput';
import { WorkoutFormType } from '@/components/form/workout/WorkoutForm';
import { Button } from '@/components/ui/button';
import { useFieldArray, useFormContext } from 'react-hook-form';

type SetsFieldArrayProps = {
  parentIndex: number;
};

function SetsFieldArray({ parentIndex }: SetsFieldArrayProps) {
  const { control } = useFormContext<WorkoutFormType>();
  const { fields, append } = useFieldArray({
    name: `exercises.${parentIndex}.sets`,
    control: control,
  });
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Sets</h3>
        <Button
          type="button"
          onClick={() => append({ repetitions: '0', load: '0' })}
        >
          Add Set
        </Button>
      </div>
      <ul>
        {fields.map((_field, index) => (
          <li key={index} className="flex items-center gap-4">
            <span>{index + 1}</span>
            <ControlledInput
              name={`exercises.${parentIndex}.sets.${index}.repetitions`}
              label="Repetitions"
            />
            <ControlledInput
              name={`exercises.${parentIndex}.sets.${index}.load`}
              label="Load"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SetsFieldArray;
