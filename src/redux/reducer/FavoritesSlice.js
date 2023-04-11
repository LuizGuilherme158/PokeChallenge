import { createSlice } from '@reduxjs/toolkit';
 
const getInitialFavorites = (key, initialValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

const initialState = getInitialFavorites('favorites', []);


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState || [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(pokemon => pokemon.url !== action.payload.url);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
