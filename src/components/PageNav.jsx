import {  NavLink } from "react-router-dom";
import styles from './PageNave.module.css';

export default function PageNav() {
  return (
   <nav className={styles.nav}>
    <ul>
        <li>
            <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
            <NavLink to='/Product'>Product</NavLink>
        </li>
    </ul>
   </nav>
  )
}
