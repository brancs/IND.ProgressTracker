import ControlledInput from '@/components/common/ControlledInput';
// import ControlledSelect from '@/components/common/ControlledSelect';
import Drawer from '@/components/common/Drawer';
import Stack from '@/components/common/Stack';
import SetsFieldArray from '@/components/form/workout/SetsFieldArray';
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
import { WorkoutFormType } from '@/pages/workout/NewPage';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

// const exercises = [
//   { label: 'Agachamento Livre', value: 'agachamento livre' },
//   { label: 'Cadeira Abdutora', value: 'cadeira abdutora' },
//   { label: 'Mesa Flexora', value: 'mesa flexora' },
//   { label: 'Cadeira Flexora', value: 'cadeira flexora' },
//   { label: 'Cadeira Extensora', value: 'cadeira extensora' },
//   { label: 'Banco Romano', value: 'banco romano' },
//   { label: 'Leg Press', value: 'leg press' },
//   { label: 'Panturrilha em Pé Máquina', value: 'panturrilha em pe maquina' },
//   { label: 'Panturrilha Sentada', value: 'panturrilha sentada' },
// ];

function ExercisesFieldArray() {
  const [open, setOpen] = useState(false);
  const { control, getValues, setValue } = useFormContext<WorkoutFormType>();
  const { fields, append } = useFieldArray({
    name: 'exercises',
    control: control,
  });

  function handleClose() {
    setOpen(false);
  }

  function resetFields() {
    setValue('customExercise', '');
    setValue('exercise', '');
  }

  function handleAddExercise() {
    const exercise = getValues('exercise');
    const customExercise = getValues('customExercise');
    append({
      id: uuid(),
      description: customExercise || exercise,
      sets: [{ id: uuid(), repetitions: '', load: '' }],
    });
    resetFields();
    handleClose();
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
            <ControlledInput name="customExercise" label="New exercise" />
            {/* <ControlledSelect
              name="exercise"
              label="Exercise"
              options={exercises}
            /> */}
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
      <Accordion type="single" collapsible>
        {fields.map((field, index) => (
          <AccordionItem key={field.id} value={`item-${field.id}`}>
            <AccordionTrigger>
              <h2 className="text-2xl font-bold capitalize">
                {field.description}
              </h2>
            </AccordionTrigger>
            <AccordionContent>
              <SetsFieldArray parentIndex={index} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
export default ExercisesFieldArray;
