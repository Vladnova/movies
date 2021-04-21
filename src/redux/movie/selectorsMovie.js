const trendMovies = state => state.movies.trendMovies;
const searchMovies = state => state.movies.searchMovies;
const baseUrl = state => state.movies.baseUrlAndSize[0];
const baseSize = state => state.movies.baseUrlAndSize[1];
const page = state => state.movies.page;

export default { trendMovies, baseUrl, baseSize, page, searchMovies };
