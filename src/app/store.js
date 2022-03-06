import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice'
import allRecipesReducer from '../features/allRecipes/allRecipesSlice'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice';

export default configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer
  },
});
