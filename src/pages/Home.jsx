import { useEffect, useState } from 'react';
import { getFilms } from '../service/filmAPI.js';
import { Link } from 'react-router-dom';
import { FilmsList } from '../components/FilmsList/FilmsList.jsx';

export const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilms();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <FilmsList films={films} />
    </>
  );
};
