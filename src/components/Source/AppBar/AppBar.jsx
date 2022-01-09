import UserMenu from '../../HomeMenuLogin/UserMenu';
import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import s from './AppBar.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggerIn);
  return (
    <div className={s.bar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
