import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import s from './UserMenu.module.scss';
import { authOperations, authSelectors } from '../../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <h3 className={s.title}>Добро Пожаловать , {name}</h3>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
