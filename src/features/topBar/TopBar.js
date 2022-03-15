import React from "react";
import { Labels } from "../labels/Labels";
import { addLabel, selectLabels } from "../labels/labelsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchTerm } from "../searchTerm/SearchTerm";
import { YelpSearch } from "../yelpSearch/YelpSearch";

export const TopBar=()=>{

    return(
        <nav>
            this is top bar by nav element 
            <br/>
            <br/>
            <YelpSearch/>
            <SearchTerm/>
            <Labels/>

        </nav>
    )
}