import React from 'react';
import { NavLink } from 'react-router-dom';
import headerRoutes from '../../routers/headerRoutes';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.wrapList}>
          {headerRoutes.map(
            ({ name, path, exact }) =>
              name && (
                <li key={path} className={styles.item}>
                  <NavLink
                    to={path}
                    exact={exact}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                  >
                    {name}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
