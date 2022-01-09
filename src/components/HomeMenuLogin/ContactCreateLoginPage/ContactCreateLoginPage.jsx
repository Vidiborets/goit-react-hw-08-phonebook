import s from './ContactCrateLoginPage.module.scss';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../../../redux/auth';
import { toast } from 'react-toastify';

export default function CreateLoginPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    toast.success(`Регистрация прошла успешно ${name}`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Поле Регистрации</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            className={s.input}
            placeholder="Имя"
            onChange={handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа]+(([' -][a-zA-Zа ])?[a-zA-Zа]*)*$"
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={s.input}
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            pattern="^[a-zA-Zа]+(([' -][a-zA-Zа ])?[a-zA-Zа]*)*$"
            required
            className={s.input}
            onChange={handleChange}
            value={password}
          />
        </label>
        <span className={s.containerButton}>
          <button className={s.button} type="submit">
            Зарегистрироваться
          </button>
        </span>
      </form>

      <NavLink to={routes.login} className={s.link}>
        Вход
      </NavLink>
    </div>
  );
}
