import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { operationsMovie } from '../../../redux/movie';

const Reviews = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(operationsMovie.getReviews(params.movieId));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
};

export default Reviews;
