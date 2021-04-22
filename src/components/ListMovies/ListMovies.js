import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorsMovie } from '../../redux/movie';
import styles from './MoviesList.module.css';

const ListMovies = ({ movies }) => {
  const baseUrl = useSelector(selectorsMovie.baseUrl);
  const baseSize = useSelector(selectorsMovie.baseSize);

  return (
    <ul className={styles.wrapList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.item}>
          {/* зробити через хук */}
          <NavLink to={`/movies/${id}`}>
            <img
              src={`${baseUrl}/${baseSize}/${poster_path}`}
              alt={title}
              className={styles.img}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default ListMovies;
