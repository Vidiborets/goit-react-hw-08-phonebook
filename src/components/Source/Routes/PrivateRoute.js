import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggerIn = useSelector(authSelectors.getIsLoggerIn);

  return (
    <Route {...routeProps}>
      {isLoggerIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
