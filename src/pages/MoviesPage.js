import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import Form from '../components/Form';
import ListMovies from '../components/ListMovies';
import { selectorsMovie, operationsMovie } from '../redux/movie';
import styles from './allStylesPages.module.css';

const SearchPage = () => {
  const searchMovies = useSelector(selectorsMovie.searchMovies);
  const page = useSelector(selectorsMovie.page);
  const saveSearch = useSelector(selectorsMovie.saveSearch);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operationsMovie.configuration());
  // }, [dispatch]);

  const handlePageSearchMovies = () => {
    dispatch(operationsMovie.searchMovies(saveSearch, page));
  };

  return (
    <>
      <Form />
      <ListMovies movies={searchMovies} />
      <Button
        type="button"
        onClick={handlePageSearchMovies}
        className={styles.button}
      >
        Load More
      </Button>
    </>
  );
};

export default SearchPage;
