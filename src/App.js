import React from 'react';
import './App.css';
import {SearchTerm} from './features/searchTerm/SearchTerm';
import {AllRecipes} from './features/allRecipes/AllRecpies'
import {FavoriteRecipes} from './features/favoriteRecipes/FavoriteRecipes'

function App() {
  return (
    <section>
      <SearchTerm/>
      <FavoriteRecipes/>
      <AllRecipes/>
    </section>
  );
}

export default App;
