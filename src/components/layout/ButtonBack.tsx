import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type ButtonBackProps = {
  to?: string;
};

function ButtonBack({ to }: ButtonBackProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => (to ? navigate(to) : navigate(-1))}>Voltar</Button>
  );
}
export default ButtonBack;
