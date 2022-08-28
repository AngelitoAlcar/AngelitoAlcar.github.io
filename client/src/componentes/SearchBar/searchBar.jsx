import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { recipeByName } from '../../actions/actions'
import sb from '../SearchBar/sb.module.css'


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault(e)
        setName(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault(e)
        if(name !== ''){
            dispatch(recipeByName(name))
            setName("")
        }else{
            alert("Por favor introducir una receta existente")
        }
    }
    return(
        <React.Fragment>
            <input type="text" placeholder="Buscar receta" onChange={(e) => handleInputChange(e)} className= {sb.input}/>
            <button type="submit" onClick={(e) => handleSubmit(e)} className={sb.botonCrearRec}>Buscar</button>
        </React.Fragment>
    )
}