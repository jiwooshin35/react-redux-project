import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loadData } from "./yelpSearchSlice"



export const YelpSearch=()=>{
    const dispatch=useDispatch()
    const [term, setTerm]=useState('')
    const [location, setLocation]=useState('')
    const [sortBy, setSortBy]=useState('')
    let keywords={
        term:term,
        location:location,
        sortBy:sortBy
    }
    const handleTermChange=(e)=>{setTerm(e.target.value)}
    const handleLocationChange=(e)=>{setLocation(e.target.value)}
    const handleSortByChange=(e)=>{setSortBy(e.target.value)}
    const handleSubmit=(e)=>{
        dispatch(loadData(keywords))
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='term' onChange={handleTermChange}/>
            <input type='text' placeholder='location' onChange={handleLocationChange}/>
            <input type='text' placeholder='sortby' onChange={handleSortByChange}/>

            <button type='submit'>Search!</button>
        </form>
    )
}