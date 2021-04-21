import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTopMovieRequest,
  getTopMovieSuccess,
  getTopMovieError,
  loadMoreMovieRequest,
  loadMoreMovieSuccess,
  loadMoreMovieError,
  pageRequest,
  pageSuccess,
  pageError,
  getBaseUrlRequest,
  getBaseUrlSuccess,
  getBaseUrlError,
  searchMoviesRequest,
  searchMoviesSuccess,
  searchMoviesError,
  saveSearchMoviesSuccess,
} from './actionsMovie';

const trendMovies = createReducer([], {
  [getTopMovieSuccess]: (_, { payload }) => [...payload],
  [loadMoreMovieSuccess]: (state, { payload }) => [...state, ...payload],
});

const baseUrlAndSize = createReducer([], {
  [getBaseUrlSuccess]: (_, { payload }) => [
    payload.base_url,
    payload.logo_sizes[4],
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
  [saveSearchMoviesSuccess]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [getTopMovieRequest]: () => true,
  [getTopMovieSuccess]: () => false,
  [getTopMovieError]: () => false,
  [loadMoreMovieRequest]: () => true,
  [loadMoreMovieSuccess]: () => false,
  [loadMoreMovieError]: () => false,
  [pageRequest]: () => true,
  [pageSuccess]: () => false,
  [pageError]: () => false,
  [getBaseUrlRequest]: () => true,
  [getBaseUrlSuccess]: () => false,
  [getBaseUrlError]: () => false,
  [searchMoviesRequest]: () => true,
  [searchMoviesSuccess]: () => false,
  [searchMoviesError]: () => false,
});

export default combineReducers({
  trendMovies,
  searchMovies,
  loader,
  baseUrlAndSize,
  page,
  saveSearch,
});
