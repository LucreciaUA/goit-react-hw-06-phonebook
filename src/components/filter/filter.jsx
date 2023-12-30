import React from "react"
 import './filter.module.css'

export const Filter =({filter, inputChange})=>{
return (<input
         type="search"
         name="search"
         id="search"
         value={filter}
         onChange={inputChange} />)
 }