import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationsMovie, selectorsMovie } from '../redux/movie';
import ListMovies from '../components/ListMovies';
import Button from '../components/Button';
import styles from './allStylesPages.module.css';
import { useRouteMatch } from 'react-router';

const HomePage = () => {
  const page = useSelector(selectorsMovie.page);
  const trendMovies = useSelector(selectorsMovie.trendMovies);
  const baseUrl = useSelector(selectorsMovie.baseUrl);

  const { path } = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsMovie.getTrendMovies());
    dispatch(operationsMovie.getPathHome(path));
  }, [dispatch, path, baseUrl]);

  const handlePageTrendMovies = () => {
    dispatch(operationsMovie.getTrendMovies(page));
  };
  return (
    <>
      {baseUrl && <ListMovies movies={trendMovies} />}
      <Button
        type="button"
        onClick={handlePageTrendMovies}
        className={styles.button}
      >
        Load More
      </Button>
    </>
  );
};

export default HomePage;
