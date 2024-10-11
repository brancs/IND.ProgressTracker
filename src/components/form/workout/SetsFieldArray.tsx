import ControlledInput from '@/components/common/ControlledInput';
import Stack from '@/components/common/Stack';
// import ControlledSelect from '@/components/common/ControlledSelect';
import { Button } from '@/components/ui/button';
import { WorkoutFormType } from '@/pages/workout/NewPage';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

// const loadTypes = [
//   { label: 'Plates', value: 'plates' },
//   { label: 'kg', value: 'kilograms' },
// ];

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
    <Stack>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Sets</h3>
        <Button
          type="button"
          onClick={() => append({ id: uuid(), repetitions: '0', load: '0' })}
        >
          Add Set
        </Button>
      </div>
      <ul>
        {fields.map((_field, index) => (
          <li key={index} className="flex items-center gap-4 px-4">
            <span className="w-14">{index + 1}</span>
            <ControlledInput
              name={`exercises.${parentIndex}.sets.${index}.repetitions`}
              label="Repetitions"
              className="w-full"
            />
            <ControlledInput
              name={`exercises.${parentIndex}.sets.${index}.load`}
              label="Load"
              className="w-full"
            />
            {/* <ControlledSelect
              name="loadType"
              label="Load Type"
              options={loadTypes}
            /> */}
          </li>
        ))}
      </ul>
    </Stack>
  );
}
export default SetsFieldArray;
