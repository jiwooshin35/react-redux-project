import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchTerm/searchTermSlice'
import allRecipesReducer from '../features/allRecipes/allRecipesSlice'
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice';
import labelsReducer from '../features/labels/labelsSlice';
import yelpSearchReducer from '../features/yelpSearch/yelpSearchSlice'
import twtReducer from '../features/twt/twtSlice'

export default configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    labels: labelsReducer,
    yelpSearch: yelpSearchReducer,
    twt: twtReducer,

  },
});
