import React,{useEffect} from 'react'
import { selectAllRecipes, loadData } from "./allRecipesSlice";
import {useSelector, useDispatch} from 'react-redux'
import {selectSearchTerm} from '../searchTerm/searchTermSlice'
import { addRecipe, removeRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
import { selectFavoriteRecipes } from '../favoriteRecipes/favoriteRecipesSlice';
import {Link} from 'react-router-dom'

export const AllRecipes=()=>{
    const allRecipes=useSelector(selectAllRecipes)
    const searchTerm=useSelector(selectSearchTerm)
    const favoriteRecipes=useSelector(selectFavoriteRecipes)
    const dispatch=useDispatch()
    //const load=()=>dispatch(loadData())
    useEffect(()=>dispatch(loadData()),[]) //why should the dispatch be returned
    const handleAddRecipe=(id)=>{
        dispatch(addRecipe(id))
    }
    const handleRemoveRecipe=(id)=>{
        dispatch(removeRecipe(id))
    }
    return(
        <section>
            {filterRecipe(allRecipes,searchTerm).map(recipe=>(
                <section key={recipe.id}>
                    <p>{recipe.id}: {recipe.name}</p>
                    {favoriteRecipes.includes(recipe.id)?
                    <button onClick={()=>handleRemoveRecipe(recipe.id)}>
                        Remove from Favorite
                    </button>
                    : 
                    <button onClick={()=>handleAddRecipe(recipe.id)}> 
                        Add to Favorite
                    </button>}
                </section>
            ))}
        </section>
    )
}

const filterRecipe=(allRecipes,searchTerm)=>{
    return allRecipes.filter(recipe=>recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}