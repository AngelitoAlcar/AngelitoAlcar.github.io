import React from "react";
import { useDispatch } from 'react-redux';
import { filterByDiet } from "../../../actions/actions";
import style from './d.module.css';


export default function FilterDiet(){

    const dispatch = useDispatch()  
    function handleFiltroByDieta(e){ 
        dispatch(filterByDiet(e.target.value))
     }
         

    return(
        <React.Fragment>
     <div>
         <select onChange={e => {handleFiltroByDieta(e)}} className={style.botonCrearRec}> 
             <option value="all">Todas las Dietas</option>
            <option value="gluten free">Gluten Free</option>
            <option value="dairy free">Dairy Free</option>
            <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole30</option>
            <option value="fodmap friendly">Fodmap Friendly</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
        </select>
    </div>
        </React.Fragment>
    )

}