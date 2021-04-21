import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import movies from './movie/reducerMovie';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const reducer = (state, action) => state;

const store = configureStore({
  reducer: {
    movies,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
