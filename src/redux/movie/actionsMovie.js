import { createAction } from '@reduxjs/toolkit';

export const getTopMovieRequest = createAction('movie/getTopMovieRequest');
export const getTopMovieSuccess = createAction('movie/getTopMovieSuccess');
export const getTopMovieError = createAction('movie/getTopMovieError');

export const loadMoreMovieRequest = createAction('movie/loadMoreMovieRequest');
export const loadMoreMovieSuccess = createAction('movie/loadMoreMovieSuccess');
export const loadMoreMovieError = createAction('movie/loadMoreMovieError');

export const loadMoreQueryRequest = createAction('movie/loadMoreQueryRequest');
export const loadMoreQuerySuccess = createAction('movie/loadMoreQuerySuccess');
export const loadMoreQueryError = createAction('movie/loadMoreQueryError');

export const pageSuccess = createAction('movie/pageSuccess');

export const getBaseUrlRequest = createAction('movie/getBaseUrlRequest');
export const getBaseUrlSuccess = createAction('movie/getBaseUrlSuccess');
export const getBaseUrlError = createAction('movie/getBaseUrlError');

export const searchMoviesRequest = createAction('movie/searchMoviesRequest');
export const searchMoviesSuccess = createAction('movie/searchMoviesSuccess');
export const searchMoviesError = createAction('movie/searchMoviesError');

export const detailsMovieRequest = createAction('movie/detailsMovieRequest');
export const detailsMovieSuccess = createAction('movie/detailsMovieSuccess');
export const detailsMovieError = createAction('movie/detailsMovieError');

export const saveSearchSuccess = createAction('movie/saveSearchSuccess');

export const castRequest = createAction('movie/castRequest');
export const castSuccess = createAction('movie/castSuccess');
export const castError = createAction('movie/castError');

export const reviewsRequest = createAction('movie/reviewsRequest');
export const reviewsSuccess = createAction('movie/reviewsSuccess');
export const reviewsError = createAction('movie/reviewsError');

export const constantSuccess = createAction('movie/constantSuccess');

export const pathHomeSuccess = createAction('movie/pathHomeSuccess');

export const pathMoviesSuccess = createAction('movie/pathMoviesSuccess');
