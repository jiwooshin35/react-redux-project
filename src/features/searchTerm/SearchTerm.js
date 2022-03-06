import React from "react";
import {selectSearchTerm, updateSearchTerm, clearSearchTerm} from './searchTermSlice'
import { useDispatch, useSelector } from "react-redux";

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
        <section>
            <input type='text' onChange={handleUpdateSearchTerm} value={searchTerm}/>
            <button onClick={handleClearSearchTerm}>clear</button>
        </section>
    
    )
}