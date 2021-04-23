import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import Button from '../components/Button';
import Form from '../components/Form';
import ListMovies from '../components/ListMovies';
import { selectorsMovie, operationsMovie } from '../redux/movie';
import { searchMoviesSuccess } from '../redux/movie/actionsMovie';
import styles from './allStylesPages.module.css';

const SearchPage = () => {
  const searchMovies = useSelector(selectorsMovie.searchMovies);
  const constant = useSelector(selectorsMovie.constant);
  const page = useSelector(selectorsMovie.page);
  const saveSearch = useSelector(selectorsMovie.saveSearch);
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  const pathHome = useSelector(selectorsMovie.path);

  useEffect(() => {
    dispatch(operationsMovie.getPathMovies(path));
  }, [dispatch, path]);

  useEffect(() => {
    return () => {
      if (pathHome === '/') {
        dispatch(searchMoviesSuccess([]));
      }
    };
  }, [dispatch, pathHome]);

  const handlePageSearchMovies = () => {
    dispatch(operationsMovie.searchMovies(saveSearch, page));
  };
  return (
    <>
      <Form />
      <ListMovies movies={searchMovies} />
      {searchMovies.length > 1 && constant > 19 && (
        <Button
          type="button"
          onClick={handlePageSearchMovies}
          className={styles.button}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default SearchPage;
