import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { operationsMovie, selectorsMovie } from '../../../redux/movie';
import { reviewsSuccess } from '../../../redux/movie/actionsMovie';
import styles from './Reviews.module.css';

const Reviews = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const reviews = useSelector(selectorsMovie.reviews);
  const loader = useSelector(selectorsMovie.loader);

  useEffect(() => {
    dispatch(operationsMovie.getReviews(params.movieId));
    return () => {
      dispatch(reviewsSuccess([]));
    };
  }, [dispatch, params]);

  return (
    !loader && (
      <div className={styles.wrap}>
        {reviews.length !== 0 && !loader && (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h4 className={styles.titleAuthor}>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && (
          <h2 className={styles.titleDefault}>
            We don't have any reviews for this movie
          </h2>
        )}
      </div>
    )
  );
};

export default Reviews;
