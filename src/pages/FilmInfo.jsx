import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getFilmById } from '../service/filmAPI.js';
import styles from './FilmInfo.module.css';

export const FilmInfo = () => {
  const { filmId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state || '/');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmById(filmId);
        setFilmInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmId]);

  return (
    <>
      <Link to={goBackLink.current}>Go back</Link>
      {filmInfo && (
        <>
          <h2>{filmInfo.original_title}</h2>
          <div className={styles.container}>
            <img
              className={styles.mainPoster}
              src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
              alt=""
            />
            <div className={styles.info}>
              <p>overview {filmInfo.overview}</p>
              <p>release date {filmInfo.release_date}</p>
              <p>genre {filmInfo.genres.map(item => item.name).join(', ')}.</p>
            </div>
          </div>
        </>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
