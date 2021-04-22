import axios from 'axios';
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

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '2a30abfbe9eb903004963b24640e499f' };

const getTrendMovies = (page = 1) => async dispatch => {
  dispatch(getTopMovieRequest());
  dispatch(loadMoreMovieRequest());
  try {
    const { data } = await axios.get(`/trending/movie/day?page=${page}`);
    dispatch(pageSuccess(page));
    page > 1
      ? dispatch(loadMoreMovieSuccess(data.results))
      : dispatch(getTopMovieSuccess(data.results));
  } catch (error) {
    dispatch(getTopMovieError(error.message));
    dispatch(loadMoreMovieError(error.message));
  }
};

const configuration = () => async dispatch => {
  dispatch(getBaseUrlRequest());
  try {
    const { data } = await axios.get('/configuration');
    dispatch(getBaseUrlSuccess(data.images));
  } catch (error) {
    dispatch(getBaseUrlError(error.message));
  }
};

const searchMovies = (query = '', page = 1) => async dispatch => {
  dispatch(searchMoviesRequest());
  dispatch(loadMoreMovieRequest());
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`,
    );
    dispatch(pageSuccess(page));
    dispatch(saveSearchSuccess(query));
    page > 1
      ? dispatch(loadMoreMovieSuccess(data.results))
      : dispatch(searchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(loadMoreMovieError(error.message));
    dispatch(searchMoviesError(error.message));
  }
};

const getDetailMovie = id => async dispatch => {
  dispatch(detailsMovieRequest());
  try {
    const { data } = await axios.get(`/movie/${id}`);
    dispatch(detailsMovieSuccess(data));
  } catch (error) {
    dispatch(detailsMovieError(error.message));
  }
};

const getCast = id => async dispatch => {
  dispatch(castRequest());
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    dispatch(castSuccess(data.cast));
  } catch (error) {
    dispatch(castError(error.message));
  }
};

const getReviews = id => async dispatch => {
  dispatch(reviewsRequest());
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    dispatch(reviewsSuccess(data.results));
  } catch (error) {
    dispatch(reviewsError(error.message));
  }
};

export default {
  getTrendMovies,
  configuration,
  searchMovies,
  getDetailMovie,
  getCast,
  getReviews,
};
