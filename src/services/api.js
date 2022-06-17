import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '9af9995e042723d75d96d38fad102c15';


const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

const fetchSearchByKeyword = async (keyword) => {
const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`);
return response.data.results;    
}

const fetchMovieDetalis = async (movieId) => {
const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
return response.data;     
}

const fetchActors = async (movieId) => {
const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
return response.data.cast;     
}

const fetchReviews = async (movieId) => {
const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
return response.data.results;     
}

const api = {
    fetchTrending,
    fetchSearchByKeyword,
    fetchMovieDetalis,
    fetchActors,
    fetchReviews,
};

export default api;


// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/  trending/all/day?api_key=<<api_key>>

// /search/search - movies поиск кинофильма по ключевому слову на странице фильмов. query
// https://api.themoviedb.org/3/  search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/  movie/{movie_id}?api_key=<<api_key>>&language=en-US

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// https://api.themoviedb.org/3/  movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/  movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

