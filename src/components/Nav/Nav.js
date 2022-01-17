import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link to="/">
      <h1>Bookstore</h1>
    </Link>
    <ul className={styles['nav-links']}>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
