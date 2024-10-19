import Drawer from '@/components/common/Drawer';
import Stack from '@/components/common/Stack';
import { Button } from '@/components/ui/button';
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [open, setOpen] = useState(false);
  const [newWorkoutName, setNewWorkoutName] = useState('');
  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <div className="h-10" />
        <h1 className="text-3xl font-bold md:text-4xl">Home</h1>
      </div>
      <Stack>
        <Drawer
          open={open}
          setOpen={setOpen}
          customTrigger={
            <DrawerTrigger asChild>
              <Button type="button">New Workout</Button>
            </DrawerTrigger>
          }
        >
          <DrawerHeader>
            <DrawerTitle>New Workout</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <Stack className="p-4">
            <Input
              placeholder="Workout name"
              onChange={(event) => setNewWorkoutName(event.currentTarget.value)}
            />
          </Stack>
          <DrawerFooter>
            <Link to={`/workout/new/${encodeURIComponent(newWorkoutName)}`}>
              <Button className="w-full">New Workout</Button>
            </Link>
            <DrawerClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </Drawer>
        <Link to="/workouts">
          <Button className="w-full">My Workouts</Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default HomePage;
