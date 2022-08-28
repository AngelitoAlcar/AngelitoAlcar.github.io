import React from "react";
import { useDispatch } from 'react-redux';
import { scoreSort } from "../../../actions/actions";
import style from './hs.module.css';

export default function HealthScore(setPagActual, setOrden){
    const dispatch = useDispatch()  
    function handleScoreSort(e){
        e.preventDefault()
        dispatch(scoreSort(e.target.value))
        setPagActual(1)
        setOrden(`Ordenado ${e.target.value}`) //*
    }


    return(
        <React.Fragment>
            <div>
                <select onChange={e =>{handleScoreSort(e)}} className={style.botonCrearRec}>  
                    <option value="">Búsqueda por puntuacion</option>
                    <option value="up">Más alta</option>
                    <option value="down">Más baja</option>
                </select>
            </div>
        </React.Fragment>
    )
}