import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { token } from "./token";
export const loadTwts=createAsyncThunk('twt/loadTwts',
async()=>{
    try{ //load 100 of elon musk's twts
        const response= await fetch(`https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/44196397/tweets?&max_results=100`,
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