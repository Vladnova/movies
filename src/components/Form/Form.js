import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operationsMovie } from '../../redux/movie';
import Button from '../Button';
import styles from './Form.module.css';

const Form = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(operationsMovie.searchMovies(searchMovies));
    setSearchMovies('');
  };

  const onChangeInput = e => {
    setSearchMovies(e.target.value);
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <label>
        <input
          type="text"
          value={searchMovies}
          placeholder="Search..."
          onChange={onChangeInput}
          className={styles.input}
        />
      </label>
      {searchMovies && (
        <Button type="submit" className={styles.buttonForm}>
          Search
        </Button>
      )}
    </form>
  );
};

export default Form;
