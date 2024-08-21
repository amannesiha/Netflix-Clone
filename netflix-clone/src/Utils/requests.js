const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
// Accessed with this address
// https://api.themoviedb.org/3/discover/tv?api_key=647ab1e82914cecf27dd747c4696378b&with_networks=123
//backdrop path used for banner
// https://image.tmdb.org/t/p/original/6i0nXccgYygiA4zSt46XjDYQO8u.jpg
//poster path used for rendering as row whitch is poster path
// https://image.tmdb.org/t/p/original/2m2W5m2UIuxv2EkgfMvEms0iAGq.jpg
