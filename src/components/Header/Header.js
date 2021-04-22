import React from 'react';
import Navigation from '../Navigation';
import { headerRoutes } from '../../routers';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <Navigation
        routes={headerRoutes}
        className={[styles.wrapList, styles.item, styles.link]}
        activeClassName={styles.activeLink}
      />
    </header>
  );
};

export default Header;
