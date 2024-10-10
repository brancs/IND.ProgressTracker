/* eslint-disable @typescript-eslint/no-unused-vars */
import { Workout } from '@/types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type WorkoutContext = {
  workouts: Workout[];
  setWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
};

const defaultValue: WorkoutContext = {
  workouts: [],
  setWorkouts: (_workouts) => {},
};

const WorkoutContext = createContext<WorkoutContext>(defaultValue);

export function WorkoutProvider({ children }: PropsWithChildren) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default function useWorkout() {
  return useContext(WorkoutContext);
}
