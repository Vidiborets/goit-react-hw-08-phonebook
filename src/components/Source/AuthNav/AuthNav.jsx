import routes from '../../../routes';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink to={routes.login} className={s.link}>
        Login
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink to={routes.register} className={s.link}>
        Sing up
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
