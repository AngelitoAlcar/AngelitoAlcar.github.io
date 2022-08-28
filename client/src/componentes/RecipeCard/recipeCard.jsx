import React from "react";
import rc from '../RecipeCard/rc.module.css'

export default function Card({name,  dieta, imagen, id}){
    return(
        <React.Fragment>
            <div className={rc.contenedor}>
                <div key = {id} className= {rc.card}>
                    <h2 className={rc.h2}>{name}</h2>
                    {dieta[0]?.name? dieta.map(d => <h5 className={rc.dieta}>{d.name}</h5>) : dieta.map(d => <h5 className={rc.dieta}>{ d + " "}</h5>)}
                    <img src={imagen} alt="a" className={rc.img}/>
                </div>
            </div>
        </React.Fragment>
    )
}