import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";

const apiKey='X9VdUdPqpTTwyfGqcGOsC8hPCMOy1TV93b3cFjjlYAX3cRASc1QDO48nrBj3SG7tof4clUHGZcN-khdp0r-ZZK1lAIycE7t5p5KiZievZ4ufG73t7S2KPioPeWUOYnYx'


export const loadData=createAsyncThunk('yelpSearch/loadData', 
    async(keywords)=>{
      try{
        const response=await yelpSearchAPI(keywords)
        const jsonResponse=await response.json()
        console.log(jsonResponse.businesses)
        return jsonResponse.businesses
        //const dispatch=useDispatch() 
        //dispatch(loadData(jsonResponse))
      }catch(err){
        console.log(err)
      }
    })

export const yelpSearchSlice=createSlice({
    name:'yelpSearch',
    initialState:[],
    reducers:{
    },
    extraReducers:{
      [loadData.fulfilled]: (state, action) => action.payload
      
    }
    
})

export default yelpSearchSlice.reducer
export const selectYelpSearch=(state)=>state.yelpSearch



//export reducer of slice to import in store
//export action to use action in other files
//export slice selector to use in other file

const yelpSearchAPI = async (keywords)=>{
    try{
      let response= await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${keywords.term}&location=${keywords.location}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          } 
        })
        return response
    }
    catch(err){
        window.alert(err)
        console.log(err)
    }
}


/*
const YelpSearch1 = async (term, location, sortBy)=>{
  try{
    let response= await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        } 
      })
    let jsonResponse= await response.json()

    return  jsonResponse.businesses.map(business => ({
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  rating: business.rating,
                  reviewCount: business.review_count}))
      
  }catch(err){
    console.log(err)
    }
}

async searchYelp(term, location, sortBy){
    let returnedBusinesses= await YelpSearch(term, location, sortBy)
    this.setState( {businesses:returnedBusinesses} )


handleSubmit{
seachYelp()
event.preventDefault();}

*/