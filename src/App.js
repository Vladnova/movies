import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { operationsMovie, selectorsMovie } from './redux/movie';

const App = () => {
  const dispatch = useDispatch();
  const baseUrl = useSelector(selectorsMovie.baseUrl);

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
