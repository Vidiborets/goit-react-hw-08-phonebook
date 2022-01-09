import { Switch } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import AppBar from './components/Source/AppBar';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader';
import PrivateRoute from './components/Source/Routes/PrivateRoute';
import PublicRoute from './components/Source/Routes/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <AppBar />
        <Suspense fallback={<Loader />}>
          {!isFetchingUser && (
            <Switch>
              <PublicRoute path={routes.home} exact>
                <HomePage />
              </PublicRoute>
              <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
                <ContactPage />
              </PrivateRoute>
              <PublicRoute
                path={routes.login}
                restricted
                redirectTo={routes.contacts}
              >
                <LoginPage />
              </PublicRoute>
              <PublicRoute
                path={routes.register}
                restricted
                redirectTo={routes.contacts}
              >
                <RegisterPage />
              </PublicRoute>
            </Switch>
          )}
        </Suspense>
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
