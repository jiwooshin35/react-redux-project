import React from 'react';
import './App.css';
import {AllRecipes} from './features/allRecipes/AllRecpies'
import {FavoriteRecipes} from './features/favoriteRecipes/FavoriteRecipes'
import { TopBar } from './features/topBar/TopBar';
import {BrowserRouter as Router, Route, useParams} from 'react-router-dom'
import {LabeledRecipes} from './features/labeledRecipes/LabeledRecipes'
import { Twt } from './features/twt/twt';

function App() {
  return (
    <Router>
      <TopBar/>
      <Route path='/all'>
        <AllRecipes/>
      </Route>
      <Route path='/favorite' exact >
        <FavoriteRecipes/>
      </Route>
      <Route path='/all'>
        <AllRecipes/>
      </Route>
      <Route path='/:label'>
        <LabeledRecipes/>
      </Route>
      <Twt/>
    </Router>
  );
}
export default App;