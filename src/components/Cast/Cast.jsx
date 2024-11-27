import { useEffect, useState } from 'react';
import { getFilmCredits } from '../../service/filmAPI.js';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmCredits(filmId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmId]);
  return (
    <>
      <ul>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <h3>
                {item.original_name}-{item.character}
              </h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
