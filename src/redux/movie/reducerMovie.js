import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTopMovieRequest,
  getTopMovieSuccess,
  getTopMovieError,
  loadMoreMovieRequest,
  loadMoreMovieSuccess,
  loadMoreMovieError,
  pageSuccess,
  getBaseUrlRequest,
  getBaseUrlSuccess,
  getBaseUrlError,
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesError,
  saveSearchSuccess,
  detailsMovieRequest,
  detailsMovieSuccess,
  detailsMovieError,
  castRequest,
  castSuccess,
  castError,
  reviewsRequest,
  reviewsSuccess,
  reviewsError,
} from './actionsMovie';

const trendMovies = createReducer([], {
  [getTopMovieSuccess]: (_, { payload }) => [...payload],
  [loadMoreMovieSuccess]: (state, { payload }) => [...state, ...payload],
});

const baseUrlAndSize = createReducer([], {
  [getBaseUrlSuccess]: (_, { payload }) => [
    payload.base_url,
    payload.logo_sizes,
  ],
});

const page = createReducer(1, {
  [pageSuccess]: (_, { payload }) => payload + 1,
});

const searchMovies = createReducer([], {
  [searchMoviesSuccess]: (_, { payload }) => [...payload],
  [loadMoreMovieSuccess]: (state, { payload }) => [...state, ...payload],
});

const saveSearch = createReducer('', {
  [saveSearchSuccess]: (_, { payload }) => payload,
});

const movieDetails = createReducer(
  {},
  {
    [detailsMovieSuccess]: (
      _,
      {
        payload: {
          title,
          overview,
          genres,
          poster_path,
          release_date,
          backdrop_path,
        },
      },
    ) => ({
      title,
      overview,
      genres,
      poster_path,
      release_date,
      backdrop_path,
    }),
  },
);

const cast = createReducer([], {
  [castSuccess]: (_, { payload }) => [...payload],
});

const reviews = createReducer([], {
  [reviewsSuccess]: (_, { payload }) => [...payload],
});

const loader = createReducer(false, {
  [getTopMovieRequest]: () => true,
  [getTopMovieSuccess]: () => false,
  [getTopMovieError]: () => false,
  [loadMoreMovieRequest]: () => true,
  [loadMoreMovieSuccess]: () => false,
  [loadMoreMovieError]: () => false,
  [getBaseUrlRequest]: () => true,
  [getBaseUrlSuccess]: () => false,
  [getBaseUrlError]: () => false,
  [searchMoviesRequest]: () => true,
  [searchMoviesSuccess]: () => false,
  [searchMoviesError]: () => false,
  [detailsMovieRequest]: () => true,
  [detailsMovieSuccess]: () => false,
  [detailsMovieError]: () => false,
  [castRequest]: () => true,
  [castSuccess]: () => false,
  [castError]: () => false,
  [reviewsRequest]: () => true,
  [reviewsSuccess]: () => false,
  [reviewsError]: () => false,
});

export default combineReducers({
  trendMovies,
  searchMovies,
  loader,
  baseUrlAndSize,
  page,
  saveSearch,
  movieDetails,
  cast,
  reviews,
});
