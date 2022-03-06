import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

const allRecipesSlice=createSlice({
    name:'allRecipes',
    initialState:[],
    reducers:{
        loadData:()=>data
    }
})
export const selectAllRecipes=(state)=>state.allRecipes
export const {loadData}=allRecipesSlice.actions
export default allRecipesSlice.reducer