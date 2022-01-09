import s from './Loader.module.scss';
import { Rings } from 'react-loader-spinner';

const Loader = () => (
  <div className={s.loader}>
    <Rings type="Rings" color="#2196f3" height={100} width={100} />
  </div>
);
export default Loader;
