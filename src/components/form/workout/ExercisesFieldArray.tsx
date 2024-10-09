import ControlledInput from '@/components/common/ControlledInput';
import Drawer from '@/components/common/Drawer';
import Stack from '@/components/common/Stack';
import SetsFieldArray from '@/components/form/workout/SetsFieldArray';
import { WorkoutFormType } from '@/components/form/workout/WorkoutForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

function ExercisesFieldArray() {
  const [open, setOpen] = useState(false);
  const { control, getValues, setValue } = useFormContext<WorkoutFormType>();
  const { fields, append } = useFieldArray({
    name: 'exercises',
    control: control,
  });

  function handleAddExercise() {
    append({
      description: getValues('exercise'),
      sets: [{ repetitions: '0', load: '0' }],
    });
    setValue('exercise', '');
    setOpen(false);
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Exercises</h3>
        <Drawer triggerLabel="Add Exercise" open={open} setOpen={setOpen}>
          <DrawerHeader>
            <DrawerTitle>New Exercise</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <Stack className="p-4">
            <ControlledInput name="exercise" label="Description" />
          </Stack>
          <DrawerFooter>
            <Button type="button" onClick={handleAddExercise}>
              Add
            </Button>
            <DrawerClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </Drawer>
      </div>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <h2 className="text-2xl font-bold">{field.description}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <SetsFieldArray parentIndex={index} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ExercisesFieldArray;
