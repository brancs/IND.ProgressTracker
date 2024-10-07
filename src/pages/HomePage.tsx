import Stack from '@/components/common/Stack';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Stack>
      <div className="flex flex-col items-start gap-6">
        <div className="h-10" />
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
      <Stack>
        <Link to="/workout/new">
          <Button>New Workout</Button>
        </Link>
        <Link to="/workouts">
          <Button>My Workouts</Button>
        </Link>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Stack>
    </Stack>
  );
}

export default HomePage;
