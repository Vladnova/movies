import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationsMovie, selectorsMovie } from '../redux/movie';
import ListMovies from '../components/ListMovies';
import Button from '../components/Button';

const HomePage = () => {
  const page = useSelector(selectorsMovie.page);
  const trendMovies = useSelector(selectorsMovie.trendMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operationsMovie.getTrendMovies());
  }, [dispatch]);

  const handlePageTrendMovies = () => {
    dispatch(operationsMovie.getTrendMovies(page));
  };
  return (
    <>
      <ListMovies movies={trendMovies} />
      <Button type="button" onClick={handlePageTrendMovies}>
        Load More
      </Button>
    </>
  );
};

export default HomePage;
