import React from "react";
import { useDispatch } from 'react-redux';
import { recipeCreated } from "../../../actions/actions";
import style from './dbOrApi.module.css';

export default function DbOrApi(){
    const dispatch = useDispatch() 
    function handleFiltroDb(e){ 
        dispatch(recipeCreated(e.target.value))
    }

    return(
        <React.Fragment> 
            <div>
            <select onChange={e => {handleFiltroDb(e)}} className={style.botonCrearRec}>  
                <option value="all">Todas las recetas</option>
                <option value="current">Existentes</option>
                <option value="created">Creadas</option>
            </select>
        </div>
        </React.Fragment>
    )
}

