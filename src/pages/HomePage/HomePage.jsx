import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './HomePage.module.scss';
import img from '../../images/img-01.png';

const HomePage = () => {
  return (
    <main>
      <div className={s.container}>
        <NavLink to={routes.contacts} className={s.link}>
          <img src={img} alt="img" className={s.img} />
        </NavLink>
      </div>
    </main>
  );
};

export default HomePage;
