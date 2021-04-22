import React from 'react';
import { headerRoutes } from '../../routers';
import Content from '../Content';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.container}>
      <Content routes={headerRoutes} />
    </main>
  );
};

export default Main;
