import { Link, useLocation } from 'react-router-dom';
import styles from './FilmsList.module.css';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {films.map(item => {
        return (
          <li key={item.id}>
            <Link state={location} to={`/filmInfo/${item.id}`}>
              <h3>{item.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
