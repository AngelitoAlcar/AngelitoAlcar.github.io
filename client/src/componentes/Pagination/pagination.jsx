import React from 'react';
import pag from '../Pagination/pag.module.css'


export default function Pagination({recPorPag, allRecipes, paginado}){

    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(allRecipes/recPorPag); i++) {
        pageNumbers.push(i)
    }

    return(
        <React.Fragment>
            <div>
                {
                pageNumbers && pageNumbers.map(n =>{
                    return <button key = {n} className={pag.botonPag} 
                    onClick={() => paginado(n)}>{n}</button>
                })
                }
             </div>
        </React.Fragment>
    )
}

