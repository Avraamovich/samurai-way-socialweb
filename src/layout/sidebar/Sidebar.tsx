import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'


export function Sidebar() {
  return (
    <div className={s.sidebar}>
      <nav>
        <ul>
          <li className={s.item}>
            <NavLink  to='/home' activeClassName={s.activeLink}>HOME</NavLink>
          </li>
          <li className={s.item}>
            <NavLink  to='/message' activeClassName={s.activeLink}>MESSAGE</NavLink>
          </li>
          <li className={s.item}>
            <NavLink  to='/news' activeClassName={s.activeLink}>NEWS</NavLink>
          </li>
          <li className={s.item}>
            <NavLink  to='/music' activeClassName={s.activeLink}>MUSIC</NavLink>
          </li>
          <li className={s.item}>
            <NavLink  to='/settings' activeClassName={s.activeLink}>SETTINGS</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
