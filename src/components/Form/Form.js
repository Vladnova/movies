import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operationsMovie } from '../../redux/movie';
import Button from '../Button';

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
    <form onSubmit={onSubmitForm}>
      <label>
        Search
        <input type="text" value={searchMovies} onChange={onChangeInput} />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Form;
