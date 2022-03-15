import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const token='AAAAAAAAAAAAAAAAAAAAAA4SaQEAAAAATir7fbZ2T3d6i9m8nrQSi%2FU1%2F3M%3DH8mhLJ50DiJ5UQ87RaM6sVco0ayZRqfGcLaO2WkYxJTDikZFcz'
export const loadTwts=createAsyncThunk('twt/loadTwts',
async()=>{
    try{
        const response= await fetch(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/44196397/tweets?&max_results=200`,
        {
            headers:{
                Authorization: `Bearer ${token}`}})
        console.dir(response)
        const jsonResponse=await response.json()
        console.dir(jsonResponse)
        return jsonResponse.data

        
    }catch(err){
        console.log(err)
    }
}
)

const twtSlice=createSlice({
    name:'twt',
    initialState:[],
    reducers:{},
    extraReducers:{
        [loadTwts.fulfilled]:(state,action)=>action.payload
    }
})

export default twtSlice.reducer
export const selectTwt=(state)=>state.twt