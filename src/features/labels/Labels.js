import { selectLabels, addLabel} from "./labelsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React,{useState} from "react";

export const Labels=()=>{
    const [input, setInput]=useState('')
    const labels=useSelector(selectLabels)
    const dispatch=useDispatch()

    const renderLabels=()=>labels.map(label=>(
        
        <Link key={label} to={`/${label}`} style={{marginLeft:10, marginRight:10}}>
            {`${label}`}
        </Link>
        
    ))

    const handleAddLabel=()=>{
        dispatch(addLabel(input))
        setInput('')
    }

    return(
        <section>
        <Link to='/'>Home</Link>
        <Link to='/favorite'>+Favorite+</Link>
        <Link to='/all'> +All+</Link>

            {renderLabels()}
         <input value={input} type='text' placeholder="Add Label.." onInput={e=>setInput(e.target.value)}></input>
         <button onClick={handleAddLabel}>+</button>
        </section>
        
    )
}