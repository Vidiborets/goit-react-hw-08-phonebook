import routes from '../../../routes';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggerIn);
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={routes.home} className={s.link}>
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn && (
            <NavLink to={routes.contacts} className={s.link}>
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
