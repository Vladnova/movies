import { lazy } from 'react';

const detailsMovieRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: true,
    component: lazy(() =>
      import('../components/PreviewMovie/Cast' /*webpackChunkName: "Cast" */),
    ),
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: true,
    component: lazy(() =>
      import(
        '../components/PreviewMovie/Reviews' /*webpackChunkName: "Reviews" */
      ),
    ),
  },
];

export default detailsMovieRoutes;
