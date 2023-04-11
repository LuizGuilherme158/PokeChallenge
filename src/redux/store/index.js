import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from 'redux/reducer/FavoritesSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});