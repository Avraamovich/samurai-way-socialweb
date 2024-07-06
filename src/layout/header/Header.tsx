import i from '../../assets/img/5299055.jpg'
import s from './Header.module.css'

export function Header() {
  return (
    <div className={s.header}>
      <header>
        <img src={i} />
      </header>
    </div>
  );
};