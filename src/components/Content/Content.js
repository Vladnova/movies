import React, { Suspense } from 'react';
import Loader from '../Loader';
import { Route, Switch } from 'react-router';

const Content = ({ routes, url = '' }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route
            key={path}
            path={`${url}${path}`}
            exact={exact}
            component={component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Content;
