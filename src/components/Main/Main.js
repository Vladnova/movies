import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import routes from '../../routers/headerRoutes';
import Loader from '../Loader';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.container}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
