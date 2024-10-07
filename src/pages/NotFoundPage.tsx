import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
export default NotFoundPage;
