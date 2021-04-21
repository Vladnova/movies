import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { operationsMovie } from './redux/movie';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operationsMovie.configuration());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
export default App;
