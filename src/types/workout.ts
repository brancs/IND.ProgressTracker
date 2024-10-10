export type Workout = {
  id: string;
  description: string;
  exercises: {
    description: string;
    sets: {
      repetitions: string;
      load: string;
    }[];
  }[];
};
