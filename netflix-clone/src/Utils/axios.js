import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  //https://image.tmdb.org/t/p/original/
});

export default instance;
