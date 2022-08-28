import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getRecipeDetail, resetDetail } from '../../actions/actions'
import { useEffect } from 'react';
import det from '../RecipeDetail/det.module.css'


export default function RecipesDetails(){
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() =>{
        dispatch(resetDetail())
        dispatch(getRecipeDetail(id))
    },[dispatch, (id)])
    
    const detalleRec = useSelector((state)=> state.detalles)
    console.log(detalleRec)

    return(
        <React.Fragment>
            <div className={det.contenedor}>
                {
                    detalleRec.length > 0 ?
                    <div className={det.div}>
                        <h1 className={det.h1}>Nombre: {detalleRec[0].name}</h1>

                        <h3 className={det.h3}>Resumen: {detalleRec[0].resumen.replace(/<[^>]*>?/g, '')}</h3>

                        <h4 className={det.h4}>Nivel de saludable: {detalleRec[0].nivelSalud ? detalleRec[0].nivelSalud : "No se ha indicado el nivel de salud"}</h4>
                    
                        <h4 className={det.pasos}>Pasos: {detalleRec[0].pasos ? detalleRec[0].pasos : "No se han indicado los pasos" }</h4>
                
                        <h4 className={det.dietas}>Dietas: {detalleRec[0].dieta.length === 0 ? "No se han indicado dietas" : !detalleRec[0].creadoEnDb ? detalleRec[0].dieta + "" : detalleRec[0].dieta.map((d) => d.name + (' '))}</h4> 

                        <img src={detalleRec[0].image ? detalleRec[0].image : detalleRec[0].imagen} alt="" />
                    </div>
                    
                    : 
                    <div className={det.load}>
                        <div className={det.containerLoad}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>
                    
                        // <p className={det.loading}>Cargando...</p>
                }
                <Link to = '/home'>
                    <button className={det.boton}>Volver al menu principal</button>
                </Link>
            </div>
        </React.Fragment>
    )
}