export type Workout = {
  id: string;
  description: string;
  exercises: {
    id: string;
    description: string;
    sets: {
      id: string;
      repetitions: string;
      load: string;
    }[];
  }[];
};
