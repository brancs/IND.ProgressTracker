import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>Voltar</Button>;
}
export default ButtonBack;
