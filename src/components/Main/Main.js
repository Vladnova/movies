import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import routes from '../../routers/headerRoutes';

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h1>loader....</h1>}>
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
