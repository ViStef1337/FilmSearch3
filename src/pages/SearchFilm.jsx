import { useEffect, useState } from 'react';
import { getSearchFilm } from '../service/filmAPI.js';
import { Link, useSearchParams } from 'react-router-dom';
import { FilmsList } from '../components/FilmsList/FilmsList.jsx';

export const SearchFilm = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filmName = searchParams.get('film');
    if (!filmName) {
      return;
    }
    async function fetchData() {
      try {
        const data = await getSearchFilm(filmName);
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchParams]);
  const hendleSubmit = e => {
    e.preventDefault();
    setSearchParams({ film: e.target.text.value });
    e.reset;
  };

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="text" />
        <button type="submit">submit</button>
      </form>
      <FilmsList films={films} />
    </>
  );
};
