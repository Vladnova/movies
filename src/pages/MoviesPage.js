import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button';
import Form from '../components/Form';
import ListMovies from '../components/ListMovies';
import { selectorsMovie, operationsMovie } from '../redux/movie';

const SearchPage = () => {
  const searchMovies = useSelector(selectorsMovie.searchMovies);
  const page = useSelector(selectorsMovie.page);
  const saveSerch = useSelector(selectorsMovie.saveSearch);
  const dispatch = useDispatch();

  const handlePageSearchMovies = () => {
    dispatch(operationsMovie.searchMovies(saveSerch, page));
  };

  return (
    <>
      <Form />
      <ListMovies movies={searchMovies} />
      <Button type="button" onClick={handlePageSearchMovies}>
        Load More
      </Button>
    </>
  );
};

export default SearchPage;
