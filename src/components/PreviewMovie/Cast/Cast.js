import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { operationsMovie, selectorsMovie } from '../../../redux/movie';
import defaulActorImg from '../../../defaultImg/defaulActorImg.jpg';
import styles from './Cast.module.css';

const Cast = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const cast = useSelector(selectorsMovie.cast);
  const baseUrl = useSelector(selectorsMovie.baseUrl);
  const logoSize = useSelector(selectorsMovie.baseSizeSmall);

  useEffect(() => {
    dispatch(operationsMovie.getCast(params.movieId));
  }, [dispatch]);

  return (
    <ul className={styles.wrapCast}>
      {cast &&
        cast.map(({ name, id, character, profile_path }) => (
          <li key={id} className={styles.itemCast}>
            <div className={styles.wrapImg}>
              <img
                className={styles.imgCast}
                src={
                  profile_path
                    ? `${baseUrl}${logoSize}${profile_path}`
                    : `${defaulActorImg}`
                }
                alt={name}
              />
            </div>
            <h4 className={styles.titleName}>{name}</h4>
            <p className={styles.textCharacter}>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
