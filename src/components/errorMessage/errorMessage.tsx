import { useAppSelector } from '../../hooks';
import { Namespace } from '../../store/const';
import './errorMessage.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state[Namespace.Data].error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
