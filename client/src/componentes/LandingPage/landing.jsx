import React from 'react';
import { Link } from 'react-router-dom';
import lg from '../LandingPage/lg.module.css'
import cocinero from './cocinero.png'


export default function LandingPage(){
    return(
         <React.Fragment>
            <div className={lg.container}>
             <img src={cocinero} alt={cocinero.png}/>
                <div className={lg.h1}>
                     <h1>¡Manos a la obra!</h1>
                </div>
                        <Link to = '/home'>
                            <button className={lg.boton}>Ingresar</button>
                         </Link>   
            </div>
            {/* eslint-disable-next-line */}
            <a className={lg.licence}>
                <h3>Made with love by: Angel</h3>
            </a>
         </React.Fragment>
    )
}

