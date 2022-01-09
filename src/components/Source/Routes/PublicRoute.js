import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) {
  const isLoggerIn = useSelector(authSelectors.getIsLoggerIn);
  const showRedirect = isLoggerIn && restricted;

  return (
    <Route {...routeProps}>
      {showRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
