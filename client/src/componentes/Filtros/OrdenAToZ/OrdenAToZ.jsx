import React from "react";
import { useDispatch } from 'react-redux';
import { alphabeticSort } from "../../../actions/actions";
import style from './aToZ.module.css';

export default function AtoZ({setPagActual,setOrden}){
    
    const dispatch = useDispatch()  
    function handleAToZ(e){ 
        e.preventDefault()
        dispatch(alphabeticSort(e.target.value))
        setPagActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    return(
        <React.Fragment>
            <div>
                <select onChange={e => {handleAToZ(e)}} className={style.botonCrearRec}> 
                    <option value="">Búsqueda alfabética</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
        </React.Fragment>
    )
}