import { createAction } from '@reduxjs/toolkit';

export const getTopMovieRequest = createAction('movie/getTopMovieRequest');
export const getTopMovieSuccess = createAction('movie/getTopMovieSuccess');
export const getTopMovieError = createAction('movie/getTopMovieError');

export const loadMoreMovieRequest = createAction('movie/loadMoreMovieRequest');
export const loadMoreMovieSuccess = createAction('movie/loadMoreMovieSuccess');
export const loadMoreMovieError = createAction('movie/loadMoreMovieError');

export const pageRequest = createAction('movie/pageRequest');
export const pageSuccess = createAction('movie/pageSuccess');
export const pageError = createAction('movie/pageError');

export const getBaseUrlRequest = createAction('movie/getBaseUrlRequest');
export const getBaseUrlSuccess = createAction('movie/getBaseUrlSuccess');
export const getBaseUrlError = createAction('movie/getBaseUrlError');

export const searchMoviesRequest = createAction('movie/searchMoviesRequest');
export const searchMoviesSuccess = createAction('movie/searchMoviesSuccess');
export const searchMoviesError = createAction('movie/searchMoviesError');

export const saveSearchMoviesSuccess = createAction(
  'movie/searchMoviesSuccess',
);