import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { geDieta, postReceta, resetDetail, getRecipeDetail } from '../../actions/actions';
// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import crear from '../RecipeCreate/crear.module.css';


function validacion(input){
    const errores = {}
    if(!input.name){
        errores.name = "Es obligatorio colocar un nombre";
    }
     if(!input.resumen){
        errores.resumen = "Es obligatorio colocar un resúmen";
    }
     if(input.nivelSalud < 10){
        errores.nivelSalud = "El nivel de saludable debe ser mayor a 100";
    } 
    if(!input.pasos){
        errores.pasos = "Debes redactar los pasos";
    }
    return errores
}

export default function RecipeCreate(){

     const dispatch = useDispatch()
    const [errores, setErrores] = useState({})

    const [input, setInput] = useState({
        name: "",
        resumen: "",
        nivelSalud: null,
        imagen: null,
        pasos: null,
        dieta: []
    })

    useEffect(() =>{
        dispatch(geDieta())
    }, [dispatch])


    function handleChange(e){
        // va guardando todo lo que el usuario escribe, en el estado input
        setInput({
            //trae todo lo que ya tenia
            ...input,
            // setea el e.target.name en e.target.value
            // este name hace referencia al tag input
            [e.target.name] : e.target.value

        })
        setErrores(validacion({
            ...input,
            [e.target.name] : e.target.value
        }))
        console.log(input) 
    }


    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                dieta: [...input.dieta, e.target.value]
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!input.name || !input.resumen || !input.nivelSalud || !input.pasos){
            return swal({
                title: 'Campos incompletos',
                text: 'Debe completar todos los campos',
                icon: 'error',
                dangerMode:true})
          }
        dispatch(postReceta(input))
        setInput({
            name: "",
            resumen: "",
            nivelSalud: null,
            imagen: null,
            pasos: null,
            dieta: []
        })
        alert("¡Tu receta fue creada con éxito!")
    }


    return(
        <React.Fragment>
            <div className={crear.contenedor}>
                <div className={crear.card}>
                <h1 className={crear.h1}>A cocinar</h1>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                     <div>
                         <div className={crear.div}>
                        <label className={crear.label}>Nombre</label>
                        <input type="text" value={input.name} name= "name" onChange={(e)=>handleChange(e)} className={crear.input}/>
                        {errores.name && (
                        <p className={crear.error}>{errores.name}</p>)}
                         </div>

                        <div className={crear.div}>
                            <label className={crear.label}>Resumen</label>
                            <textarea value={input.resumen} name="resumen" onChange={(e)=>handleChange(e)}  className={crear.input}/>
                            {errores.resumen && (<p className={crear.error}>{errores.resumen}</p>)}
                        </div>

                        <div className={crear.div}>
                            <label className={crear.label}>Nivel de saludable</label>
                            <input type="number" value={input.nivelSalud} name = "nivelSalud" onChange={(e)=>handleChange(e)}  className={crear.input}/>
                            {errores.nivelSalud && (<p className={crear.error}>{errores.nivelSalud}</p>)}
                        </div>

                        <div className={crear.div}>
                            <label className={crear.label}>Imagen</label>
                            <input type="text" value={input.imagen} name="imagen" onChange={(e)=>handleChange(e)}  className={crear.input}/>
                        </div>

                        <div className={crear.div}>

                            <label className={crear.label}>Pasos a seguir</label>
                            <textarea value={input.pasos} name="pasos" onChange={handleChange}  className={crear.input}/>
                            {errores.pasos && (<p className={crear.error}>{errores.pasos}</p>)}
                        </div>

                           <div className={crear.dietas}><label>Dietas</label></div>
                            <div className={crear.div}>
                            <label className={crear.container}>Gluten Free</label>
                            <input type="checkbox" value= "gluten free" name="gluten free" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <label className={crear.check}>Dairy Free</label>
                            <input type="checkbox" value= "dairy free" name="dairy free" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Lacto-ovo vegetarian</label>
                            <input type="checkbox"  value= "lacto ovo vegetarian" name="lacto ovo vegetarian" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Vegano</label>
                            <input type="checkbox" value= "vegan" name="vegan" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Paleo</label>
                            <input type="checkbox" value= "paleolithic" name="paleolithic" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Primitiva</label>
                            <input type="checkbox" value= "primal" name="primal" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Whole 30</label>
                            <input type="checkbox" value= "whole 30" name="whole 30" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>FODMAP friendly</label>
                            <input type="checkbox" value= "fodmap friendly" name="fodmap friendly" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Vegetariano</label>
                            <input type="checkbox" value= "vegetarian" name="vegetarian" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Pescatariano</label>
                            <input type="checkbox" value= "pescatarian" name="pescatarian" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                            <label className={crear.check}>Keto</label>
                            <input type="checkbox" value= "ketogenic" name="ketogenic" onChange={(e) =>handleCheck(e)} className={crear.inputC}/>
                            <div className={crear.checkmark}></div>
                        </div>
                    
                        <button type="submit" className={crear.boton} disabled={Object.keys(errores).length}>Crear receta</button>
                </div>
            </form>
            <Link to = '/home'><button className={crear.back}>Volver a inicio</button></Link>
            </div>
        </div>
        </React.Fragment>
    )
}