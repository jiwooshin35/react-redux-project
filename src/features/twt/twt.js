import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadTwts, selectTwt } from "./twtSlice"




export const Twt=()=>{
    const dispatch=useDispatch()
    const handleLoadTwts=()=>{
        dispatch(loadTwts())
    }
    const twt=useSelector(selectTwt)
    return(<>
        <a onClick={handleLoadTwts} style={{color:'green'}}>Load Elon's Twts</a>
        <ul>
        {twt.length&&twt.map(ele=>(
            <li key={ele.id}>{ele.text}</li>
        ))}
        </ul>
        </>
    )
}
