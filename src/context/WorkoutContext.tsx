/* eslint-disable @typescript-eslint/no-unused-vars */
import { Workout } from '@/types';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

const localStorageKey = 'stored-workouts';

type WorkoutContext = {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
};

const defaultValue: WorkoutContext = {
  workouts: [],
  addWorkout: (_workout) => {},
};

const WorkoutContext = createContext<WorkoutContext>(defaultValue);

export function WorkoutProvider({ children }: PropsWithChildren) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  function saveToLocal(workouts: Workout[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(workouts));
  }

  function getFromLocal() {
    const storedData = localStorage.getItem(localStorageKey);
    if (!storedData) return [];
    return JSON.parse(storedData) as Workout[];
  }

  function addWorkout(workout: Workout) {
    setWorkouts((workouts) => [...workouts, workout]);
    saveToLocal([...workouts, workout]);
  }

  useEffect(() => {
    const storedWorkouts = getFromLocal();
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
    }
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default function useWorkout() {
  return useContext(WorkoutContext);
}
