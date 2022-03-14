import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeRecipe, selectFavoriteRecipes } from "./favoriteRecipesSlice";
import { selectAllRecipes } from "../allRecipes/allRecipesSlice";
import {Link} from 'react-router-dom'
export const FavoriteRecipes =()=>{
    const favoriteRecipes=useSelector(selectFavoriteRecipes)
    const allRecipes=useSelector(selectAllRecipes)

    const dispatch=useDispatch()
    const handleRemoveRecipe=(id)=>{
        dispatch(removeRecipe(id))
    }

    return(
        <section>
            <ul>
            {favoriteRecipes.map(id=>
                allRecipes.map(recipe=>
                    recipe.id===id &&
                    <li key={recipe.id}>
                        {recipe.id}: {recipe.name}
                        <button onClick={()=>handleRemoveRecipe(recipe.id)}> 
                            X
                        </button>
                    </li>
                ))} 
            </ul>
        </section>
    )
}
//prop: function reference, function call, or inline function?
//in case of function needs arg?