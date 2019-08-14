import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li key="Home">
          <NavLink
            exact
            activeClassName={styles.activeLink}
            className={styles.NavLink}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li key="Pets">
          <NavLink
            activeClassName={styles.activeLink}
            className={styles.NavLink}
            to="/pets"
          >
            Pets
          </NavLink>
        </li>
        <li key="About">
          <NavLink
            activeClassName={styles.activeLink}
            className={styles.NavLink}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
