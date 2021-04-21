import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { operationsMovie, selectorsMovie } from '../redux/movie';

const MovieDetailsPage = () => {
  const location = useParams();
  const title = useSelector(selectorsMovie.title);
  const overview = useSelector(selectorsMovie.overview);
  const releaseDate = useSelector(selectorsMovie.releaseDate);
  const backdropPath = useSelector(selectorsMovie.backdropPath);
  const genres = useSelector(selectorsMovie.genres);
  const posterPath = useSelector(selectorsMovie.posterPath);
  const baseSize = useSelector(selectorsMovie.baseSize);
  const baseUrl = useSelector(selectorsMovie.baseUrl);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsMovie.getDetailMovie(location.movieId));
  }, [dispatch]);

  return (
    <>
      <div>
        <button type="button">Go back</button>
        <img src={`${baseUrl}${baseSize}${posterPath}`} alt={title} />

        <div>
          <h2>
            {title}: ({releaseDate})
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <h5>{name}</h5>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;

{
  /* <div
        className={styles.wrap}
        style={{
          backgroundImage: linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)),url(${base_url}${logo_sizes[6]}${backdrop_path}),
        }}
      >
        <Button type="button" onClick={GoBack} className={styles.goBackBtn}>
          <GoBackIcon width="40" height="40" />
        </Button>
        <img
          className={styles.img}
          src={`${base_url}${logo_sizes[4]}${poster_path}`}
          alt={title}
        />
        <div className={styles.inner}>
          <h2 className={styles.titleFilm}>
            {title}: ({release_date})
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </div>
      </div>
      <Navigation
        route={MovieNav}
        url={url}
        className={[styles.wrapper, , styles.link]}
        activeClassName={styles.linkActive}
      /> */
}
