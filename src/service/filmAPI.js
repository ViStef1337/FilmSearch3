import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getFilms = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getSearchFilm = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data;
};

export const getFilmById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getFilmCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getFilmReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
