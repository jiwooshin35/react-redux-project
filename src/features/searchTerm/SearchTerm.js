import React from "react";
import {selectSearchTerm, updateSearchTerm, clearSearchTerm} from './searchTermSlice'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const SearchTerm=()=>{
    const searchTerm=useSelector(selectSearchTerm)
    const dispatch=useDispatch()

    const handleUpdateSearchTerm=(e)=>{
        dispatch(updateSearchTerm(e.target.value))
    }
    const handleClearSearchTerm=(e)=>{
       
        dispatch(clearSearchTerm())
        //e.target.value=''
        //e.preventDefault()

        
    }

    return (
        <>
            <input type='text' placeholder="filter" onChange={handleUpdateSearchTerm} value={searchTerm}
           />
            <button onClick={handleClearSearchTerm}>clear</button>
        </>
    
    )
}