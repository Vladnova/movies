import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useHistory,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import Content from '../components/Content';
import PreviewMovie from '../components/PreviewMovie';
import { operationsMovie, selectorsMovie } from '../redux/movie';
import { detailsPageRoutes } from '../routers';
import { detailsMovieSuccess } from '../redux/movie/actionsMovie';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const { pathname: localPath } = useLocation();

  const path = useSelector(selectorsMovie.path);

  const dispatch = useDispatch();

  useEffect(() => {
    const error =
      localPath !== `/movies/${movieId}` &&
      localPath !== `/movies/${movieId}/cast` &&
      localPath !== `/movies/${movieId}/reviews`;

    if (error) {
      history.push(path);
    }
  }, [localPath, history, movieId, path]);

  useEffect(() => {
    if (!Number(movieId)) {
      history.push(path);
    }
    dispatch(operationsMovie.getDetailMovie(movieId));
  }, [dispatch, movieId, history, path]);

  useEffect(() => {
    return () => {
      dispatch(detailsMovieSuccess(''));
    };
  }, [dispatch]);

  const goBack = () => {
    history.push({
      pathname: path,
    });
  };

  return (
    <>
      <PreviewMovie goBack={goBack} />
      <Content routes={detailsPageRoutes} url={match.path} />
    </>
  );
};

export default MovieDetailsPage;
