import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllRecipes } from "../allRecipes/allRecipesSlice";


export const LabeledRecipes=()=>{
    let {label}=useParams()
    let allRecipes=useSelector(selectAllRecipes)
    return(
        <section>
            <ul>
            {filterRecipeByLabel(allRecipes,label).map(recipe=>
                <li key={recipe.id}>{recipe.id}. {recipe.name}</li>
                )}
            </ul>
        </section>
    )
}
const filterRecipeByLabel=(allRecipes,label)=>allRecipes.filter(recipe=>{
    return recipe.label==label
    
})