const trendMovies = state => state.movies.trendMovies;
const searchMovies = state => state.movies.searchMovies;
const baseUrl = state => state.movies.baseUrlAndSize[0];
const baseSizeSmall = state => state.movies.baseUrlAndSize[1][2];
const baseSize = state => state.movies.baseUrlAndSize[1][4];
const baseSizeBig = state => state.movies.baseUrlAndSize[1][6];
const page = state => state.movies.page;
const saveSearch = state => state.movies.saveSearch;
const title = state => state.movies.movieDetails.title;
const overview = state => state.movies.movieDetails.overview;
const genres = state => state.movies.movieDetails.genres;
const posterPath = state => state.movies.movieDetails.poster_path;
const releaseDate = state => state.movies.movieDetails.release_date;
const backdropPath = state => state.movies.movieDetails.backdrop_path;
const loader = state => state.movies.loader;
const cast = state => state.movies.cast;

export default {
  trendMovies,
  baseUrl,
  baseSize,
  baseSizeBig,
  page,
  searchMovies,
  saveSearch,
  title,
  overview,
  genres,
  posterPath,
  releaseDate,
  backdropPath,
  loader,
  cast,
  baseSizeSmall,
};
