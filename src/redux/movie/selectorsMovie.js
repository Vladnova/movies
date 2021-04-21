const trendMovies = state => state.movies.trendMovies;
const searchMovies = state => state.movies.searchMovies;
const baseUrl = state => state.movies.baseUrlAndSize[0];
const baseSize = state => state.movies.baseUrlAndSize[1];
const page = state => state.movies.page;
const saveSearch = state => state.movies.saveSearch;
const title = state => state.movies.movieDetails.title;
const overview = state => state.movies.movieDetails.overview;
const genres = state => state.movies.movieDetails.genres;
const posterPath = state => state.movies.movieDetails.poster_path;
const releaseDate = state => state.movies.movieDetails.release_date;
const backdropPath = state => state.movies.movieDetails.backdrop_path;

export default {
  trendMovies,
  baseUrl,
  baseSize,
  page,
  searchMovies,
  saveSearch,
  title,
  overview,
  genres,
  posterPath,
  releaseDate,
  backdropPath,
};
