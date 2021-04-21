import axios from 'axios';
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

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '2a30abfbe9eb903004963b24640e499f' };

const getTrendMovies = (page = 1) => async dispatch => {
  dispatch(getTopMovieRequest());
  dispatch(loadMoreMovieRequest());
  dispatch(pageRequest());
  try {
    const { data } = await axios.get(`/trending/movie/day?page=${page}`);
    dispatch(pageSuccess(page));
    page > 1
      ? dispatch(loadMoreMovieSuccess(data.results))
      : dispatch(getTopMovieSuccess(data.results));
  } catch (error) {
    dispatch(getTopMovieError(error.message));
    dispatch(loadMoreMovieError(error.message));
    dispatch(pageError(error.message));
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
  dispatch(pageRequest());
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`,
    );
    dispatch(pageSuccess(page));
    dispatch(saveSearchMoviesSuccess(query));
    page > 1
      ? dispatch(loadMoreMovieSuccess(data.results))
      : dispatch(searchMoviesSuccess(data.results));
  } catch (error) {
    dispatch(pageError(error.message));
    dispatch(loadMoreMovieError(error.message));
    dispatch(searchMoviesError(error.message));
  }
};

// const saveSearch = search => dispatch => {
//   dispatch(saveSearchMoviesSuccess(search));
// };

export default { getTrendMovies, configuration, searchMovies };
