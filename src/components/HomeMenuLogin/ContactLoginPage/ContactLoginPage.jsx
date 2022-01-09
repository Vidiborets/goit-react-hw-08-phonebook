import s from './ContactLoginPage.module.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../../../redux/auth';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactLoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ name, email, password }));
    resetPage();
    toast.success(`Добро пожаловать${name}`);
  };

  const resetPage = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Поле Логинизации</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={s.input}
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder={'Password'}
            pattern="^[a-zA-Zа]+(([' -][a-zA-Zа ])?[a-zA-Zа]*)*$"
            required
            className={s.input}
            value={password}
            onChange={handleChange}
          />
        </label>
        <span className={s.containerButton}>
          <button className={s.button} type="submit">
            Login
          </button>
        </span>
      </form>
      <ToastContainer autoClose={2000} />
      <NavLink to={routes.register} className={s.link}>
        Регистрация
      </NavLink>
    </div>
  );
};

export default ContactLoginPage;
