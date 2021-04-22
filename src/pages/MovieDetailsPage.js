import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import Content from '../components/Content';
import PreviewMovie from '../components/PreviewMovie';
import { operationsMovie } from '../redux/movie';
import { detailsPageRoutes } from '../routers';

const MovieDetailsPage = () => {
  const location = useParams();
  const match = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsMovie.getDetailMovie(location.movieId));
  }, [dispatch, location]);

  return (
    <>
      <PreviewMovie />
      <Content routes={detailsPageRoutes} url={match.path} />
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
