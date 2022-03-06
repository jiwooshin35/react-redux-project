import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipesSlice=createSlice({
    name: 'favoriteRecipes',
    initialState: [],
    reducers:{
        addRecipe:(state, action)=>{state=state.push(action.payload)},
        removeRecipe:(state,action)=>state=state.filter(recipeId=>recipeId!==action.payload)
    }
})

export const {addRecipe,removeRecipe} =favoriteRecipesSlice.actions
export default favoriteRecipesSlice.reducer

export const selectFavoriteRecipes =(state)=>state.favoriteRecipes