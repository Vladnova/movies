import { lazy } from 'react';

const headerRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../pages/HomePage' /*webpackChunkName: "HomePage"*/),
    ),
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: true,
    component: lazy(() =>
      import('../pages/MoviesPage' /*webpackChunkName: "MoviesPage" */),
    ),
  },
  {
    name: '',
    path: '/movies/:movieId',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage" */
      ),
    ),
  },
];

export default headerRoutes;
