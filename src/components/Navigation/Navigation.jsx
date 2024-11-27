import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="searhFilm">Search Film</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
