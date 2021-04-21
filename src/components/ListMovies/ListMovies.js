import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorsMovie } from '../../redux/movie';

const ListMovies = ({ movies }) => {
  const baseUrl = useSelector(selectorsMovie.baseUrl);
  const baseSize = useSelector(selectorsMovie.baseSize);

  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          {/* зробити через хук */}
          <NavLink to={`/movies/${id}`}>
            <img src={`${baseUrl}/${baseSize}/${poster_path}`} alt={title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default ListMovies;
