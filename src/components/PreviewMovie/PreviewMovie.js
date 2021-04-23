import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorsMovie } from '../../redux/movie';
import Button from '../Button';
import { ReactComponent as GoBackIcon } from '../../icons/goBack.svg';
import styles from './MoviesPreview.module.css';
import Navigation from '../Navigation';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import { detailsPageRoutes } from '../../routers';
import defaultMovieImg from '../../defaultImg/defaultMovieImg.jpg';

const PreviewMovie = () => {
  const title = useSelector(selectorsMovie.title);
  const overview = useSelector(selectorsMovie.overview);
  const releaseDate = useSelector(selectorsMovie.releaseDate);
  const backdropPath = useSelector(selectorsMovie.backdropPath);
  const genres = useSelector(selectorsMovie.genres);
  const posterPath = useSelector(selectorsMovie.posterPath);
  const baseSize = useSelector(selectorsMovie.baseSize);
  const baseUrl = useSelector(selectorsMovie.baseUrl);
  const baseSizeBig = useSelector(selectorsMovie.baseSizeBig);

  const math = useRouteMatch();
  const pathname = useLocation();
  const location = useParams();

  useEffect(() => {
    const error =
      pathname !== `/movies/${movieId}` &&
      pathname !== `/movies/${movieId}/cast` &&
      pathname !== `/movies/${movieId}/reviews`;

    if (error) {
      history.push('/');
    }
  }, []);

  return (
    <>
      {genres && (
        <>
          <div
            className={styles.wrap}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)),url(${baseUrl}${baseSizeBig}${backdropPath})`,
            }}
          >
            <Button
              type="button"
              className={styles.goBackBtn}
              onClick={() => null}
            >
              <GoBackIcon width="40" height="40" />
            </Button>
            <img
              src={
                posterPath
                  ? `${baseUrl}${baseSize}${posterPath}`
                  : `${defaultMovieImg}`
              }
              alt={title}
              className={styles.img}
            />

            <div className={styles.inner}>
              <h2 className={styles.titleFilm}>
                {title}: ({releaseDate.slice(0, 4)})
              </h2>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    <h5>{name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Navigation
            routes={detailsPageRoutes}
            url={math.url}
            className={[styles.wrapper, , styles.link]}
            activeClassName={styles.linkActive}
          />
        </>
      )}
    </>
  );
};

export default PreviewMovie;
