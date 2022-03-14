import { createSlice } from "@reduxjs/toolkit";

const labelsSlice=createSlice({
    name:'labels',
    initialState:[],
    reducers:{
        addLabel:(state,action)=>{state=state.push(action.payload)},
        removeLabel:(state,action)=>state=state.filter(label=>label!==action.payload)
    }
})
export default labelsSlice.reducer

export const {addLabel, removeLabel}=labelsSlice.actions

export const selectLabels=(state)=>state.labels